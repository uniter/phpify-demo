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

class DelegatingTransformer
{
    /**
     * @var TransformerInterface[]
     */
    private $transformers;

    /**
     * @param TransformerInterface[] $transformers
     */
    public function __construct(array $transformers)
    {
        $this->transformers = $transformers;
    }

    public function transform($type, $string)
    {
        return $this->transformers[$type]->transform($string);
    }
}
