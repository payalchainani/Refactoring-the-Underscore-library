var path = require('path');
var expect = require('chai').expect;

var _ = require(path.join(__dirname, '..', './lowbar.js'));

describe('_', function () {
  'use strict';

  it('is an object', function () {
    expect(_).to.be.an('object');
  });
  describe('#identity', function () {
    it('is a function', function() {
      expect(_.identity).to.be.a('function');
    });
    it('returns argument value', function () {
      var result = _.identity('hello');
      var expected = 'hello';
      expect(result).to.equal(expected);
    });
  });

  describe('#first', function () {
    it('is a function', function() {
      expect(_.first).to.be.a('function');
    });
    it('returns the first element of the given argument', function () {
      var result = _.first ([1,2,3]);
      var expected = 1;
      expect(result).to.equal(expected);
    });
    it('returns the first element of the given argument when given second argument', function () {
      var result = _.first ([1,2,3], 2);
      var expected = [1,2];
      expect(result).to.eql(expected);
    });
    it('works for string argument', function () {
      var result = _.first ('hello', 2);
      var expected = 'he';
      expect(result).to.eql(expected);
    });
  });
});
