'use strict';

class Validator {
    constructor() {}


    isValid(input, rules) {

        return reules(input);
    }

    isString(input) {

        return typeof input === 'string';
    }

    isNumber(input) {

        return typeof input === 'number';

    }

    isArray(input) {

        return Array.isArray(input);

    }

    isObject(input) {

        return typeof input === 'object';

    }

    isBoolean(input) {

        return typeof input === 'boolean';

    }

    isFunction(input) {

        return typeof input === 'function';

    }

}

module.exports = Validator;