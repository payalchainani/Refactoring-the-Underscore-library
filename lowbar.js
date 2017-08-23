var _ = {};

_.identity = function (value) {
  return value;
};

_.first = function (list, n) {
  if (n === undefined) return list[0];
  return list.slice(0,n);
};


module.exports = _;
