<?php

/*
 * Demo of packaging PHP files up with Browserify+Uniter
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/uniter/phpify-demo
 *
 * Released under the MIT license
 * https://github.com/uniter/phpify-demo/raw/master/MIT-LICENSE.txt
 */

namespace {
    function file_exists($path)
    {
        return true;
    }

    function is_file($path)
    {
        return true;
    }

    function strtoupper($string)
    {
        return 'UP' . $string . 'PER';
    }

    class InvalidArgumentException extends Exception
    {
    }
}

namespace Phpify\Demo;

use Phpify\Demo\Transformer\DelegatingTransformer;
use Phpify\Demo\Transformer\TitleCaseTransformer;
use Phpify\Demo\Transformer\UpperCaseTransformer;

require_once __DIR__ . '/../../vendor/autoload.php';

$delegator = new DelegatingTransformer(array(
    'title' => new TitleCaseTransformer(),
    'upper' => new UpperCaseTransformer()
));

return $delegator;
