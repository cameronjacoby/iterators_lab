# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`: A higher order function is a function that operates on other functions, either by taking them in as arguments or by returning them. Higher order functions allow us to abstract over actions in our code, making those actions easier to interpret at a higher level and less prone to error. **They allow us to say what we 'mean' to do instead of all the details of actually doing it.**


Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:


* `max`: In JS, the Math.max() function outputs the largest number provided in the arguments. If no arguments are provided, it will output -Infinity to be used to compare with future declarations. It will output NaN if compared with other types.

```
example:

Math.max(10, 5, 100, 2, 1000);

// returns
=> 1000

```

* `min`: In JS, the Math.min() function outputs the smallest number provided in the arguments. If no arguments are provided, it will output Infinity to be used to compare with future declarations. It will output NaN if compared with other types.

```
example:

Math.min(10, 5, 100, 2, 1000);

// returns
=> 2

```

* `each`: iterates through 'each' item in an array and passes that item and its index through the specified function

```
example: printing all pets in a array

var myPets = ['dog', 'cat', 'horse', 'rabbit'];

// iterating through the array
pets.forEach(function(item, index){
  console.log( "pets[" + index + "] returns", item);
});

// output
pets[0] returns dog
pets[1] returns cat
pets[2] returns horse
pets[3] returns rabbit

```

* `map`: transforms an array by applying a function to all of its elements and building a new array from the returned values

```
example: return the square of each number in an array

var nums = [1, 2, 3, 4];

var squaredNums = nums.map(function(item, index){
  item * item;
});

// returns
[1, 4, 9, 16]

```

* `filter` ([note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)): filters out items in an array that meet a certain condition

```
example: returns numbers in the array less than 100

var nums = [10, 5, 100, 2, 1000];

var filteredNums = nums.filter(function(item, index){
  return item < 100;
});

// returns
[10, 5, 2]

```

* `reduce` ([note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)): adds up all the numbers in an array

```
example: take the average grade after adding an array of grades with reduce

var grades = [98, 90, 88, 72];

var averageGrade = grades.reduce(function(sum, currentVal){
  return sum + currentVal;
}) / grades.length;

```

* `reject`([note](http://underscorejs.org/#reject)): the opposite of 'filter'; returns values in a list without the elements that the set condition filtered out


```
example: returns numbers in the array NOT less than 100

var nums = [10, 5, 100, 2, 1000];

var rejectedNums = nums.reject(function(num){
  return num < 100;
});

// returns
[100, 1000]

```


Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```

```
var myNumbers = [-1, 2, -3, 4, -5, 6];

var findAbs = function(num) {
  return Math.sqrt(num * num);
}

var absNumbers = map(myNumbers, findAbs);
```