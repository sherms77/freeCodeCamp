// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.


// const arr = ["elnopqrst"];
// const arr = ["hi there", "wow"]
// idx = arr.indexOf("wow");

// console.log(idx);

// does not work on a character checking basis
// will only check if the entire sting is in the element 
// Eg: "hi there" needs to be in the argument of indexOf() to return a value

let text = "Hello world";
console.log(text.indexOf("e"));
console.log(text.indexOf("k"));
console.log(text.indexOf("Hello"));

