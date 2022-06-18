// syntax to run in node js: ' node "file name" '

// steps
// 1. find what you want to replace
// 2. replace with
// 3. replace

// let hello = "   Hello, World!  ";
// let wsRegex = /(^\s+)|(\s+$)/; // finds what you want to replace -> matches whitespace at the start and end of the sting
// let wsRegex = /Hello, World!/;
// let whitespaceRemoval = "$0";
// let result = hello.replace(wsRegex, whitespaceRemoval);
// let result = hello.replace(wsRegex, "Hi there");

// NEW CODE
let hello = "   Hello, World!  "; // original string
let wsRegex = /(^\s+)|(\s+$)/; // 1. finds what you want to replace -> matches whitespace at the start and end of the sting
// let replaceWith = /(^\S+)|(\S+$)/; // 2. replace with -> negative whitespace
let replaceWith = ''; // 2. replace with -> negative whitespace
let result = hello.replace(wsRegex, replaceWith); // 3. replace

console.log(result);