// returns the first element of an array that satisifies the condition in a test function
// if does not meet the condition -1 is returned
// article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
// how does 'arrow' function only take in '1' element from the array? refer to notes in README file

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
