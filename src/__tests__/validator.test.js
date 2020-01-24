'use strict';

const Validator = require('../classes/validator.js');
const validator = new Validator();

describe('validator module performs basic validation of', () => {
    let str = 'yes';
    let num = 1;
    let arr = ['o'];
    let obj = { x: 'y' };
    let func = () => {};
    let bool = false;

    it('strings', () => {
        expect(validator.isString(str)).toBeTruthy();
        expect(validator.isString([str, num, arr, obj, func, bool])).toBeFalsy();
    });
    it('numbers', () => {
        expect(validator.isNumber(num)).toBeTruthy();
    });
    it('arrays', () => {
        expect(validator.isArray(arr)).toBeTruthy();
    });
    it('objects', () => {
        expect(validator.isObject(obj)).toBeTruthy();
    });
    it('booleans', () => {
        expect(validator.isBoolean(bool)).toBeTruthy();
    });
    it('functions', () => {
        expect(validator.isFunction(func)).toBeTruthy();
    });
});

describe('validator module validations', () => {
    const person = {
        "firstName": "Fred",
        "lastName": "Sample",
        "hair": {
            "type": "wavy",
            "color": "brown",
            "age": 27
        },
        "favoriteFoods": ["pizza", "cupcakes", "salmon"],
        "married": true,
        "kids": 3
    }


    it('validates the proper types of object ', () => {
        expect(typeof person.firstName).toEqual('string');
        expect(typeof person.lastName).toEqual('string');
    });
    it('validates the presence of required object ', () => {
        expect(person.hair).toBeTruthy('string');
        expect(person.age).toEqual(27);
    });
    it('validates the types of values an array', () => {
        expect(typeof person.favoriteFoods[0]).toEqual('string');
    });
    it('validates a value array ', () => {
        let arrValue = person.married.toBeTruthy(true);
        expect(arrValue).toBeTruthy();
    });
});