'use strict';

const arithmetic = require('../lib/arithmetic.js');


describe('It can add, subtract, multiply, and divide', () => {
  it('return the sum of two numbers', () => {
    let testingArray = [2, 3, 4];
    expect(arithmetic.add(testingArray)).toEqual(9);
  });

  it('returns the difference of two numbers', () => {
    let testingArray = [14, 3, 4];
    expect(arithmetic.subtract(testingArray)).toEqual(7);
  });

  it('returns the product of two numbers', () => {
    let testingArray = [2, 3, 4];
    expect(arithmetic.multiply(testingArray)).toEqual(24);
  });

  it('returns the qoutient of two numbers', () => {
    let testingArray = [12, 3, 4];
    expect(arithmetic.divide(testingArray)).toEqual(1);
  });
});
