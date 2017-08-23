var _ = {};

_.identity = function (value) {
  return value;
};

_.first = function (list, n) {
  if (n === undefined) return list[0];
  return list.slice(0,n);
};

_.last = function (list, n) {
  if (n === undefined) return Number(list.slice(-1));
  return list.slice(list.length - n);
};

_.each = function (list, fn) {
 for (let i = 0; i < list.length; i++) {
    fn(list[i], i, list);
 } 
};

_.indexOf = function (arr, value, index) {
  if (index !== undefined) {
    arr = arr.slice(index);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
  
 };

module.exports = _;
