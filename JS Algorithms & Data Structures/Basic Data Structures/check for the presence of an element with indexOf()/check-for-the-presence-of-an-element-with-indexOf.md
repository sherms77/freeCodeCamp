# FCC challenge
- (check for the presence of an element with indexOf())[https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof]

# Explanation
The ``indexOf()`` method allows you the check if an element exists in an array. The ``indexOf()`` operator takes an element as a paramater, and when called, it returns the position of index of that element. It returns -1 if the element does not exist in the array.

# Example
```
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

1. ``fruits.indexOf('dates')`` returns -1 -> does not exist in the array
2. ``fruits.indexOf('oranges')`` returns 2 -> at index 2 in the array
3. ``fruits.indexOf('pears')`` returns 1 -> at index 1 in the array

# Challenge
We have defined a function, quickCheck, that takes an ``array and an element as arguments``. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

# Questions
1. What is does the function do?
 - A: 
      1. it takes an array and an element as arguments.
      2. checks if the element exists in the array.
      3. then returns ``true`` if it's in the array and ``false`` if it isn't.
      Eg: (myArray, hi) -> first argument is the array and the second argument is the element to check for.

# Links
- (.isInteger() method)[https://bobbyhadz.com/blog/javascript-check-if-string-is-positive-integer]

# Code
```
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# Solutions
a. 
```
function quickCheck(arr, elem) {
  if arr.indexOf(elem) = -1 {
    return 'true';
    else
    retrun 'false';
  }
}
```

b. 
```
function quickCheck(arr, elem) {
  // Only change code below this line
  let elemCheck = arr.indexOf(elem);
  if (elemCheck = -1) {
    return "false";
  } else {
    return "true"
  }
  // Only change code below this line
}
```

b.
```
function quickCheck(arr, elem) {
  // Only change code below this line
  let elemCheck = arr.indexOf(elem);
  if (elemCheck = -1) {
    return false;
  } else {
    return true;
  }
  // Only change code below this line
}
```

c.
```
function quickCheck(arr, elem) {
  // Only change code below this line
  let elemCheck = arr.indexOf(elem);
  console.log(elemCheck); // outputs index position of element in array or -1 if it is not in the array
  
  if (elemCheck >= 0) { 
    return true;
  } else {
    return false;
  }
  // Only change code below this line
```

# Notes
- 230322: solution (c) works. solved challenge. refer to check-for-presence-of-an-element-with-indexOf.txt for solution.
- 170322: looking into how to use isInteger method. refer to link in links section. NEXT STEP:
 1. read article in links section. - DONE
- 170322: there is a problem with my if statement - condition. it's not recognizing a positive number and returning the correct output. eg: if output is ``1 `` it should return ``true`` and ``false`` for ``-1``.
- 170322: solution (b) didn't work in fcc. seems to work in vs code. errors from fcc:
 - quickCheck(["onions", "squash", "shallots"], "onions") should return true
 - quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
- 160322: fixed indentation and tried solution (b). worked in vs code but not in fcc. error: The quickCheck function should return a boolean (true or false), not a string ("true" or "false"). NEXT STEP:
 1. need to work out how to return boolean values. - DONE
- 150322: tried solution (a) in vs code. got the following error: ``ReferenceError: Invalid left-hand side in assignment``. Looks like there is an error with the indentation. NEXT STEP: 
 1. make sure indentation is correct. - DONE
- 130322: created indexOf.js file to see how indexOf operator works. NEXT STEPS:
 1. draft questions to determine what's required to make function work. - DONE
- 130322: NEXT STEPS:
 1. populate this file. - DONE
- started 13 March 2022