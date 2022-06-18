# FCC challenge
- (Copy an array with the spread operator)[https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator]

# Explanation
The spread operator allows you to easily copy all of an array's elements in order. The spread syntax looks like this ```...```.

# Example
let thisArray = [true, true, indefined, false, null];
let thatArray = [...thisArray];

# Challenge
We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 

The function is supposed to ``return`` a new array made up of ``num copies of arr``. We have done most of the work for you, but it doesn't work quite right yet. 

Modify the function using ``spread syntax`` so that it works correctly (hint: another method we have already covered might come in handy here!).

# Questions
1. What is the function supposed to do?
 - A: - return a new array and make multiple copies of it based on the argument (number) passed to the ``num`` paramater.

2. How do I make multiple copies of the same array based on the argument passed to the num paramater?
 - A: the argument passed to the function's ``num`` paramater makes multiple copies of the array by using a while loop.

# Code
```
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# Solutions
a. 
```
function copyMachine(arr, num) { // function takse two arguments - 1.arr and 2.num
  let newArr = []; // initializes an empty array -> this is the new array
  while (num >= 1) { // condition for while loop -> while num is greater than or = to 1
    
    // Only change code below this line
    newArr.push([...arr]); // makes copy of arr and adds it to newArr
    // Only change code above this line
    
    num--; // decrements num to turn off while loop - ie: when num is equal to 1 -> stop
  }
  return newArr; // returns newArr
}
```

# Notes
- 130322: my understanding of the functions purpose and its i/o was correct. solution (a) worked. passed challenge. copy-array-with-the-spread-operator.txt contains final solution.
- 110322: created a spead.js file to test and better understand how the spread operator works. drafted questions to better understand what exactly the function is supposed to do. my answer to question 1 might be wrong. review the description of the function again and assess if my understanding of it is correct. the code suggests that my understanding might be wrong. NEXT STEPS: 
 1. Reassess functions puropose - intended input and output (i/o). - DONE
- started 11 March 2022
