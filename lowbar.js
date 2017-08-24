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
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      fn(list[i], i, list);
    }
  } 
  else {
    for (var key in list) {
      fn(list[key], key, list);
    }
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

 _.filter = function (list, fn) {
   var resultArr = [];
   _.each(list, function (value, index, list) {
    if (fn(value, index, list)) resultArr.push(value);
   });
   return resultArr;
  }; 
   
  _.reject = function (list, fn) {
    var resultArr = [];
    
    _.each(list, function (value, index, list) {
      if (!fn(value, index, list)) resultArr.push(value);
     });
     return resultArr;
   };  
   
  _.uniq = function (arr, fn) {
     var resultArr = [];
     for (let i = 0; i < arr.length; i++) {
       if (resultArr.indexOf(arr[i]) == -1) {
         resultArr.push(arr[i]);
       }
     }
     // return resultArr if no fn given;
     if (fn === undefined) {
       return resultArr;
     }
     return resultArr.filter(fn);
   };

  _.map = function (list, fn) {
    var resultArr = [];
    
    _.each(list, function (value) { 
      resultArr.push(fn(value));
     });
     return resultArr; 
  };
  

module.exports = _;
