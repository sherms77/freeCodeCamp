// .include() method

arr = [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]];

// console.log(arr.includes(3)); // returns false because the element is a nested array?
// arr.includes(3); // does not return anything
// console.log(arr.includes(3, 0)); // does not pick up element in nested array

newArr = [5, 4, 3, 2, 1];
console.log(newArr.includes(5)); // returns true
console.log(newArr.includes(5, 1)); // returns false because it starts at position [1]
console.log(newArr.includes(3, 2)); // returns true because it starts at position [2]