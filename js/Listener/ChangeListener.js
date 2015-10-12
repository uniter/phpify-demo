/*
 * Demo of packaging PHP files up with Browserify+Uniter
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpify-demo
 *
 * Released under the MIT license
 * https://github.com/uniter/phpify-demo/raw/master/MIT-LICENSE.txt
 */

'use strict';

function ChangeListener(document, transformer) {
    this.document = document;
    this.transformer = transformer;
}

ChangeListener.prototype.listen = function () {
    var listener = this,
        document = listener.document;

    document.getElementById('input').addEventListener('change', function () {
        var transformed = listener.transformer.transform('upper', this.value);

        document.getElementById('output').textContent = transformed;
    });
};

module.exports = ChangeListener;
