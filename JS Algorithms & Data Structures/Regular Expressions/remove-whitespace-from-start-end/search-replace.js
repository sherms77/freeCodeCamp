// code from challenge: use capture groups to search and replace

let str = "one two three"; // variable that stores string
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // regex divided into three capture groups. each capture group searches for any word character (\w+) 1 or more times. \s - matches white space.
let replaceText = "$3 $2 $1"; // variable stores syntax used to access the capture groups stored in the fixRegex variable. the capture groups are accessed in descending order.
let result = str.replace(fixRegex, replaceText); // .replace() method is run on the str variable. it takes two paramaters. the two paramaters it takes here is "fixRegex" and "replaceText". the .replace() method is stored in the result variable.

console.log(result);