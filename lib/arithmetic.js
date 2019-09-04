'use strict';

let arithmetic = module.exports = {};

arithmetic.isArray = function (numArray) {
  if (Array.isArray(numArray)){
    return numArray.every((index) => typeof index === 'number');
  } else {
    return false;
  }
};

arithmetic.add = function(numArray) {

  if(!arithmetic.isArray(numArray)){
    return 'An array was not given';
  }

  return numArray.reduce((a,b) => a + b);
};

arithmetic.subtract = function(numArray) {

  if(!arithmetic.isArray(numArray)){
    return 'An array was not given';
  }

  return numArray.reduce((a,b) => a - b);
};

arithmetic.multiply = function(numArray) {

  if(!arithmetic.isArray(numArray)){
    return 'An array was not given';
  }

  return numArray.reduce((a,b) => a * b);
};

arithmetic.divide = function(numArray) {

  if(!arithmetic.isArray(numArray)){
    return 'An array was not given';
  }

  return numArray.reduce((a,b) => a / b);
};
