const chai = require('chai');
const assert = require('chai').assert;
const message = require('../src/message').sayHello;
const addNumbers = require('../src/message').addNumbers;

describe('message', () => {
    it('message say hello', function () {
        assert.equal(message(), 'hello')
    });

    it('message type is string', function () {
        assert.typeOf(message(), 'string')
    });
});

describe('add number', () => {
    it('add number should be above 5', function () {
        let result = addNumbers(5, 5);
        assert.isAbove(result, 5);
    });

    it('add number type is number', function () {
        let result = addNumbers(5, 5);
        assert.typeOf(result, 'number');
    });
})