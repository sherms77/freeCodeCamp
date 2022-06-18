# FCC challenge
- (Copy array items using slice())[https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice]

# Links
- (Array.prototype.slice())[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice]

# Code
function forecast(arr) {
  // Only change code below this line
  
  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

# Solutions
a.
```
function forecast(arr) {
  // Only change code below this line
  arr.slice(2, 4); // two arguments passed are the start and end indexes. it will start at index 2 and end at index 4 - it will not include the element at the end index.
  return arr;
}
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

b.
```
function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4); 
  }
// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# Note
- 100322: PASSED. looked at solution again and tested it in the js visualizer to try and debug it. identified problem re: no output. should have used the .slice() method in the return statement. ie: return arr.slice(2, 4); - this worked and passed the test. refer to copy-array-items-using-slice().txt for solution.
- 090322: created a test function - testFunction.js, to better understand a function's construction, flow, output and how to call it. tried solution (a) again in fcc but did not work. will keep trying. will spend another 2 hours on it, if I can't work it out after that, I will look up solution.
- 050322: still unsure why solution (a) does not work. copied function into vs code but could not get it to work or produce the correct output - would not slice anything with the return statement in the function. created a testSlice.js file to test the slice method - got that to work as intended. did some research too and read the mdn dev docs on it. will have another go at it. if i can't get it to work in fcc will look up the solution.
- 040322: solution (a) works in the console but does not work in fcc. unsure why. looked at hints - it says the same thing as the explanation which i followed. NEXT STEP: 1. do some more research. -DONE.
- started 4 March 2022