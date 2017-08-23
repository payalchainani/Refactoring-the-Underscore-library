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

module.exports = _;
