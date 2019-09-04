'use strict';

const greet = require('../lib/greet.js');

const faker = require('faker');

describe('It can greet people', () => {

  it('greets a random person appropriately', () => {
    let name = faker.random.word();
    let greeting = greet.sayHello(name);
    expect(greeting).toEqual(`Greetings, ${name}!`);
  });

  it('returns null when you do not pass a string', () => {
    let int = 17;
    expect(greet.sayHello(int)).toEqual(null);
  });

});
