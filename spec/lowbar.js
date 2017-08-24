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

  describe('#each', function () {
    it('is a function', function () {
      expect(_.each).to.be.a('function');
    });
    
    it('works for an array', function () {  
      let count = 0;
      function incCount () {
        count ++;
      }
      _.each([1,2,3],incCount);
      expect(count).to.equal(3);
    });

    it('check returns first, second and third call', function () {
      const spy = sinon.spy();
      _.each([1,2,3], spy);
      expect(spy.firstCall.calledWithExactly(1,0,[1,2,3])).to.equal(true);
      expect(spy.secondCall.calledWithExactly(2,1,[1,2,3])).to.equal(true);
      expect(spy.thirdCall.calledWithExactly(3,2,[1,2,3])).to.equal(true);
    });

    it('check returns first, second and third call for objects', function () {
      const spy = sinon.spy();
      _.each({one:1, two:2, three:3}, spy);
      expect(spy.firstCall.calledWithExactly(1,'one',{one:1, two:2, three:3})).to.equal(true);
      expect(spy.secondCall.calledWithExactly(2,'two',{one:1, two:2, three:3})).to.equal(true);
      expect(spy.thirdCall.calledWithExactly(3,'three',{one:1, two:2, three:3})).to.equal(true);
    });

    it('checks function was called three times', function () {
      const spy = sinon.spy();
      _.each({one:1, two:2, three:3}, spy);
      expect(spy.calledThrice).to.equal(true);
    });
  });

  describe('#indexOf', function () {
    it('is a function', function() {
      expect(_.indexOf).to.be.a('function');
    });
    it('returns index of value', function () {
      var result = _.indexOf ([1,2,3], 2);
      var expected = 1;
      expect(result).to.equal(expected);
    });

    it('returns -1 if value is not in array', function () {
      var result = _.indexOf ([1,2,3], 4);
      var expected = -1;
      expect(result).to.equal(expected);
    });

    it('returns index of a string', function () {
      var result = _.indexOf ('hello', 'o');
      var expected = 4;
      expect(result).to.equal(expected);
    });

    it('returns index of search value after given index(3rd arg)', function () {
      var result = _.indexOf ([1,2,3,4,5,6], 5, 2 );
      var expected = 2;
      expect(result).to.equal(expected);
    });
  });

  describe('#filter', function () {
    it('is a function', function () {
      expect(_.filter).to.be.a('function');
    });

    it('filters only items that meet truth criteria', function () { 
      
      function testFilter (value) {
         return value === 3;
      }
      expect(_.filter([1,2,3], testFilter)).to.eql([3]);
      
    });
  });

  describe('#reject', function () {
    it('is a function', function () {
      expect(_.reject).to.be.a('function');
    });

    it('filters only items that are false', function () {
      
      function testReject (value) {
        return value === 3;
     }
     expect(_.reject([1,2,3], testReject)).to.eql([1,2]);

    });
  });

  describe('#uniq', function () {
    it('is a function', function () {
      expect(_.uniq).to.be.a('function');
    });

    it('returns array of unique values when no function arg given', function () {
      var result = _.uniq([1,3,2,1,2,4,5]);
      var expected = [1,3,2,4,5];
      expect(result).to.eql(expected);
    });

    it('returns array of unique values with iteratee fn', function () {
      function testUniq(value) {
        return value % 2 === 0;
      }
      expect(_.uniq([1,3,2,2,4,5,7,8], testUniq)).to.eql([2,4,8]);
    });
  });

  describe('#map', function () {
    it('is a function', function () {
      expect(_.map).to.be.a('function');
    });

    it('returns new array with modified items', function () {
      function testMap(value) {
        return value * 2;
      }
      expect(_.map([1,2,3], testMap)).to.eql([2,4,6]);
    });

    it('returns new array with modified items from object', function () {
      function testMap(value) {
        return value * 2;
      }
      expect(_.map({a:1, b:2, c:3}, testMap)).to.eql([2, 4, 6]);
    });
  });

  describe('#contains', function () {
    it('is a function', function () {
      expect(_.contains).to.be.a('function');
    });

    it('if fromIndex is not given, start from index 0', function () {
      var result = _.contains([1,2,3,4,5], 3);
      var expected = true;
      expect(result).to.equal(expected);
    });
    it('returns true if value is found in array from index number', function () {
      var result = _.contains([1,2,3,4,5], 3, 1);
      var expected = true;
      expect(result).to.equal(expected);
    });
      
    it('returns false if value is not found in array', function () {
      var result = _.contains([1,2,3,4,5], 3, 3);
      var expected = false;
      expect(result).to.equal(expected);
    });

    it('works for strings', function () {
      var result = _.contains('hello', 'l', 1);
      var expected = true;
      expect(result).to.equal(expected);
    });
  });

  describe.only('#pluck', function () {
    it('is a function', function () {
      expect(_.pluck).to.be.a('function');
    });

    it('returns an array', function () {
      expect(_.pluck([])).to.eql([]);
    });

    it('returns values from specified keyName', function () {
      var result = _.pluck([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name');
      var expected = ['moe', 'larry', 'curly'];
      expect(result).to.eql(expected);
    });
  });
});

