// refer to README file for info about solution.
// Setup
const myArr = [2, 3, 4, 5, 6];

console.log('hello world');

// Only change code below this line
var total = 0;
for(i = 0; i < myArr.length; i++) {
  console.log(myArr[i]); // Outputs each element of myArr.
  total += myArr[i]; // Takes value in total and adds it to value at index [i] of myArr. Then stores it in total.
} console.log(total); // Outputs value stored in total which is sum of all elements added together.
