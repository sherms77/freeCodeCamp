# fcc challenge
- [title case a sentence](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence)

# challenge
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like `the` and `of`.

# rules
1. capitalize the first letter of each word in the string passed to the function.
2. the rest of the word needs to remain in lower case.
3. also capitalize connecting words in the sentence like `the` and `of`.

# questions
1. how do i captialize the first letter of each word?

# resources
- [How to Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial](https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/)

# lesson code
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

# notes
- 070124: works but only if input sting is in lower case. need to take input string, convert it all into lower case and then parse it so it capitalizes the first letter of each word in the string. refer to `title.js`.
- 050124: started