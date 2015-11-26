/*
 * Demo of packaging PHP files up with Browserify+Uniter
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpify-demo
 *
 * Released under the MIT license
 * https://github.com/uniter/phpify-demo/raw/master/MIT-LICENSE.txt
 */
'use strict';

var fs = require('fs'),
    globby = require('globby'),
    path = require('path'),
    files = globby.sync([
        __dirname + '/../php/**/*.php',
        __dirname + '/../vendor/autoload.php',
        __dirname + '/../vendor/composer/**/*.php'
    ]),
    root = __dirname + '/..',
    code = '';

files.forEach(function (filePath) {
    var relativePath = path.relative(root, filePath);

    // Insert a require for the PHP file - PHPify will transpile it
    code += 'case ' + JSON.stringify(relativePath) + ': return require(' + JSON.stringify(filePath) + ');\n';
});

code = 'switch (path) {\n' + code + '}\nreturn null;';

fs.writeFileSync(
    __dirname + '/../dist/fileData.js',
    'module.exports = function (path) {\n' + code + '\n};'
);
