// compare characters in two stings
// var str1 = "abcd";
// var str2 = "hijkabcd";

// console.log(str2.includes(str1));

// var strA = "hi there";
// var strB = "ie";

// console.log(strA.includes(strB)); // should return true

var A = "zyxwvutsrqponmlkjihgfedcba";
var B = "qrstu"; // already in alpha order

// var A = "elno";
// var B = "elo";

// console.log(A.includes(B));
// console.log(B.includes(A));

var sortStr = A.split("").sort().join("");
var sortStr2 = B.split("").sort().join("");
console.log(sortStr);
console.log(sortStr2);

// console.log("unsorted string A: ", A.includes(B));
// console.log("sorted string A: ", sortStr.includes(B));
// console.log("sorted strings A & B: ", sortStr.includes(sortStr2));

console.log(sortStr.includes(sortStr2));
// console.log(sortStr2.includes(sortStr));

// var letters2 = ["zyxwvutsrqponmlkjihgfedcba"];

// noel
// ole

// the problem is that the string has to be in the exact same sequence in each element to return true
// eg: for "elo" to be detected in "elnoqrst" the "n" cannot be in the middle of "el" and "o"
var x = "elnopqrst";
var y = "elo";
console.log(x.includes(y));

