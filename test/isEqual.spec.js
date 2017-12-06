const expect = require('chai').expect;
const isEqual = require('../index.js');

describe('isEqual', () => {
  it('return 6 equal if there are 6 number equality in array', () => {
    const lArray = [-1, 0, 0.13, -0.13, -0.13, 500, 0.13, 1, -0, -1, 500];
    expect(isEqual(lArray).length).to.equal(6);
  });

  it('return 2 equal if there are 2 null equality in array', () => {
    // NOTE: NaN is null
    const lArray = [null, 'null', null, 'null', NaN];
    expect(isEqual(lArray).length).to.equal(2);
  });

  it('return 6 equal if there are 6 mixed equality in array', () => {
    const lArray = [false, true, NaN, '', 0, false, true, new Number(), null];
    expect(isEqual(lArray).length).to.equal(6);
  });

  it('return 2 equal if there are 2 undefined equality in array', () => {
    const lArray = [undefined, 'undefined', undefined, 'undefined'];
    expect(isEqual(lArray).length).to.equal(2);
  });

  it('return 1 equal if there are 1 object equality in array', () => {
    const lArray = [new Object(), {}, {}, new Object()];
    expect(isEqual(lArray).length).to.equal(1);
  });

  it('return 3 equal if there are 3 array equality in array', () => {
    const lArray = [[], new Array(), [], new Array(), [1], [new Number()], new Array(new Number())];
    expect(isEqual(lArray).length).to.equal(3);
  });

  it('return 1 equal if there are 3 bad values equality in array', () => {
    const lArray = [() => '', () => undefined, () => 'foo'];
    expect(isEqual(lArray).length).to.equal(1);
  });

  it('return 1 equal if there are 1 object equality in array', () => {
    const lArray = [{ a: 't' }, { a: 't' }, { a: 't' }];
    expect(isEqual(lArray).length).to.equal(1);
  });

  it('return 1 equal if there are 1 object equality in array', () => {
    const lArray = [{ a: 't' }, { a: 't' }, { a: 't' }];
    expect(isEqual(lArray).length).to.equal(1);
  });

  it('return 2 equal if there are 2 object equality in array', () => {
    const lArray = [{ a: 't', b: 'c' }, { a: 't', b: 'c' }, { a: 't', b: 'd' }];
    expect(isEqual(lArray).length).to.equal(2);
  });

  it('return 1 equal if there are 1 object equality in array', () => {
    const lArray = [
      { a: 't', b: 'd' },
      { b: 'd', a: 't' },
    ];

    expect(isEqual(lArray).length).to.equal(1);
  });

  it('return 1 equal if there are 1 object equality in array', () => {
    const lArray = [
      { a: 't', b: 'd' },
      { b: 'd', a: 't' },
      { "a": 't', "b": 'd' },
      { "b": 'd', "a": 't' },
    ];

    expect(isEqual(lArray).length).to.equal(1);
  });
});
