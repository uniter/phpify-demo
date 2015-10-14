/*
 * Demo of packaging PHP files up with Browserify+Uniter
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpify-demo
 *
 * Released under the MIT license
 * https://github.com/uniter/phpify-demo/raw/master/MIT-LICENSE.txt
 */

'use strict';

var $ = require('jquery'),
    fileData = require('./dist/fileData.js'),
    path = require('path'),
    phpEngine = require('./php/src/transformer.php')({
        include: function (filePath, promise) {
            var wrapper;

            filePath = filePath.replace(/^\(program\)/, '');
            filePath = path.relative(__dirname, filePath);

            wrapper = fileData(filePath);

            if (!wrapper) {
                promise.reject();
                return;
            }

            promise.resolve(wrapper);
        }
    });

// Write content HTML to the DOM
phpEngine.getStdout().on('data', function (data) {
    document.body.insertAdjacentHTML('beforeEnd', data + '<br>');
});
phpEngine.getStderr().on('data', function (data) {
    document.body.insertAdjacentHTML('beforeEnd', data + '<br>');
});

// Go!
phpEngine.execute().then(function (transformer) {
    var ChangeListener = require('./js/Listener/ChangeListener'),
        DocumentReadyListener = require('./js/Listener/DocumentReadyListener'),
        changeListener = new ChangeListener(document, transformer.unwrapForJS()),
        documentReadyListener = new DocumentReadyListener($, changeListener);

    documentReadyListener.listen();
}).catch(function (error) {
    console.warn('ERROR: ' + error.toString());
});
