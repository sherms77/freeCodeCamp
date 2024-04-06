// var str = ["zyxwvutsrqponmlkjihgfedcba"];
var str = ["mary"];
var sortStr = str[0].split("").sort().join("");

console.log(sortStr);

// with "Mary" with uppercase "M" - 070424
var str2 = ["Mary"];
var sortStrB = str2[0].split("").sort().join(""); // doesn't alpha sort it with uppercase "M"??

console.log(sortStrB);
