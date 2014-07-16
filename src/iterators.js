// max implementation

var Iterators = (function() {
  var api = {
    max: function(numList){
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if ( numList[i] > max ) {
          max = numList[i];
        }
      };
      return max;
    }
  };

  return api;
})();

module.exports = Iterators;


// min implementation

var min = function(numList) {
  var min = Infinity;
  for (var i = 0; i < numList.length; i += 1) {
    if (numList[i] < min) {
      min = numList[i]
    }
  };
  return min;
};

module.exports.min = min;


// each implementation

var each = function(list, action) {
  for (var i = 0; i < list.length; i += 1) {
    action(list[i], i);
  };
  return list;
};

module.exports.each = each;


// map implementation

var map = function(list, action) {
  var mappedList = [];
  for (var i = 0; i < list.length; i += 1) {
    mappedList[i] = action(list[i], i);
  };
  return mappedList;
};

module.exports.map = map;


// filter implementation

var filter = function(list, action) {
  var filteredList = [];
  for (var i = 0; i < list.length; i += 1) {
    if (action(list[i], i) === true) {
      filteredList.push(list[i]);
    };
  };
  return filteredList;
};

module.exports.filter = filter;


// reduce implementation

var reduce = function(numList) {
  var sum = 0;
  for (var i = 0; i < numList.length; i += 1) {
    sum += numList[i];
  };
  return sum;
};

module.exports.reduce = reduce;


// reject implementation

var reject = function(list, action) {
  var rejectList = [];
  for (var i = 0; i < list.length; i += 1) {
    if (action(list[i], i) !== true) {
      rejectList.push(list[i]);
    };
  };
  return rejectList;
};

module.exports.reject = reject;


////////// phase 4: refactor using map

var myNumbers = [-1, 2, -3, 4, -5, 6];

var findAbs = function(num) {
  return Math.sqrt(num * num);
}

var absNumbers = map(myNumbers, findAbs);






