// Example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120

// this code works in fcc editor but does not output anything in node js
// return statements do not output anything
function factorialize(num) {
  if (num <= 1) {
    return 1;
  } else {
    return factorialize(num - 1) * num;
  }
  
} 

factorialize(5);