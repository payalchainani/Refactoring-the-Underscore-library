var path = require('path');
var expect = require('chai').expect;
var sinon = require('sinon');

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
      expect(result).to.equal(expected);
    });
  });

  describe('#last', function () {
    it('is a function', function() {
      expect(_.last).to.be.a('function');
    });
    it('returns the last element of the given argument', function () {
      var result = _.last ([1,2,3]);
      var expected = 3;
      expect(result).to.equal(expected);
    });
    it('returns the last element of the given argument when given second argument', function () {
      var result = _.last ([1,2,3], 2);
      var expected = [2,3];
      expect(result).to.eql(expected);
    });
    it('returns given number of characters in a string', function () {
      var result = _.last ('hello', 2);
      var expected = 'lo';
      expect(result).to.equal(expected);
    });
  });

  describe.only('#each', function () {
    it('is a function', function () {
      expect(_.each).to.be.a('function');
    });
    
    it('works for an array', function () {  
      let count = 0;
      function incCount (){
        count ++;
      }
      _.each([1,2,3],incCount);
      expect(count).to.equal(3);
    });

    it('check returns first call', function () {
      const spy = sinon.spy();
      _.each([1,2,3], spy);
      expect(spy.firstCall.calledWithExactly(1,0,[1,2,3])).to.equal(true);
      expect(spy.secondCall.calledWithExactly(2,1,[1,2,3])).to.equal(true);
      expect(spy.thirdCall.calledWithExactly(3,2,[1,2,3])).to.equal(true);

    });
  });
});
