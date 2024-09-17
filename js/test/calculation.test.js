const chai = require('chai');
const assert = require('chai').assert;

const calculation = require('../src/calculation');


describe('Calculation', () => {
    it('calculation fare 10', function () {
        assert.equal(calculation(10), 100)
    });

    it('calculation fare 20', function () {
        assert.equal(calculation(20), 200)
    })
})