'use strict';

const Rule = require('../Rule');

/**
 * Rule for check <img> tag if not have alt attribute
 */
class ImgTagShouldHaveAltAttributeRule extends Rule {
    /**
     * @constructor
     */
    constructor() {
        super('ImgTagShouldHaveAltAttributeRule',
            'img:not([alt])',
            function (length) {
                return 'There are '
                    + length
                    + ' <img> tag without alt attribute.';
            });
    }
}

module.exports = ImgTagShouldHaveAltAttributeRule;
