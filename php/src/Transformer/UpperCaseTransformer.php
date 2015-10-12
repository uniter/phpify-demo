<?php

/*
 * Demo of packaging PHP files up with Browserify+Uniter
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpify-demo
 *
 * Released under the MIT license
 * https://github.com/uniter/phpify-demo/raw/master/MIT-LICENSE.txt
 */

namespace Phpify\Demo\Transformer;

class UpperCaseTransformer implements TransformerInterface
{
    public function transform($string)
    {
        return strtoupper($string);
    }
}
