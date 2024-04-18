const A = "elno"; // string to search
const B = "elo";
const C = "o";
const D = "eo";
const E = "et"

const X = "elnopqrst" // string to search

// console.log(A.length);

// console.log(A.includes(B)); // false -> B = "elo"
// console.log(A.includes(C, 3)); // true
// console.log(A.includes(C)); // false -> this returned true?
// console.log(A.includes(D)); // false -> D = "eo"
console.log(X.includes(C)); // true -> C = "o"
console.log(X.includes(E)); // false -> E = "et" - does not return true as "et" are not together
console.log(X.includes(E, 0)); // false -> E = "et" - does not true at "et" are still not togeter

const arr = ["elno", "elo"];


