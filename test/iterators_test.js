var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');


// max test

describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67,34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  })
})


// min test

describe('Iterators', function(){
  describe('#min', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67,34];
    });

    it('should return the minimum in an array', function(){
      expect(Iterators.min(myArr)).to.equal(22);
    });

    it('should return Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });
});


// each test

describe('Iterators', function(){
  describe('#each', function(){
    var myArr;
    var myFunction;
    beforeEach(function(){
      myArr = [66,22,67,34];
      myFunction = function(currentItem, index) {
        return currentItem / 2;
      };
    });

    // doesn't pass yet
    it('should return the array', function(){
      expect(Iterators.each(myArr, myFunction)).to.eql([66,22,67,34]);
    });

    // doesn't pass yet
    it('should return an empty array for empty array', function(){
      myArr = [];
      expect(Iterators.each(myArr, myFunction)).to.eql([]);
    });
  });
});


// map test

describe('Iterators', function(){
  describe('#map', function(){
    var myArr;
    var myFunction;
    beforeEach(function(){
      myArr = [66,22,67,34];
      myFunction = function(currentItem, index) {
        return currentItem / 2;
      };
    });

    // doesn't pass yet
    it('should return each item in the array divided by 2', function(){
      expect(Iterators.map(myArr, myFunction)).to.eql([33,11,33.5,17]);
    });

    // doesn't pass yet
    it('should return an empty array for empty array', function(){
      myArr = [];
      expect(Iterators.map(myArr, myFunction)).to.eql([]);
    });
  });
});


// filter test

describe('Iterators', function(){
  describe('#filter', function(){
    var myArr;
    var myFunction;
    beforeEach(function(){
      myArr = [66,22,67,34];
      myFunction = function(currentItem, index) {
        return currentItem > 65;
      };
    });

    // doesn't pass yet
    it('should return filtered list containing numbers greater than 65', function(){
      expect(Iterators.filter(myArr, myFunction)).to.eql([66,67]);
    });

    // doesn't pass yet
    it('should return an empty array for empty array', function(){
      myArr = [];
      expect(Iterators.filter(myArr, myFunction)).to.eql([]);
    });
  });
});


// reduce test

describe('Iterators', function(){
  describe('#reduce', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67,34];
    });

    it('should return the sum of the numbers in the array', function(){
      expect(Iterators.reduce(myArr)).to.eql(189);
    });

    it('should return an empty array for empty array', function(){
      myArr = [];
      expect(Iterators.reduce(myArr)).to.eql(0);
    });
  });
});


// reject test

describe('Iterators', function(){
  describe('#reject', function(){
    var myArr;
    var myFunction;
    beforeEach(function(){
      myArr = [66,22,67,34];
      myFunction = function(currentItem, index) {
        return currentItem > 65;
      };
    });

    // doesn't pass yet
    it('should return filtered list containing numbers NOT greater than 65', function(){
      expect(Iterators.reject(myArr, myFunction)).to.eql([22,34]);
    });

    // doesn't pass yet
    it('should return an empty array for empty array', function(){
      myArr = [];
      expect(Iterators.reject(myArr, myFunction)).to.eql([]);
    });
  });
});













