# fcc challenge
- [truncate a string](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string)

# challenge
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

# rules
1. string is past to the `first` argument
2. function will truncate the string by the number of characters passed in the `second` argument. 
3. `if` the length of the string is `>` the `second` argument -> return a `...` `ending`. 

# resources
1. [JavaScript String length](https://www.w3schools.com/jsref/jsref_length_string.asp)
2. [How To Index, Split, and Manipulate Strings in JavaScript](https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascript)

# challenge code
function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

# notes
- 110123: passed challenge. used `slice`. refer to `truncate.js` for solution.
- 100123: might need to use `indexing`. ie: output string from designated `index positions`.
- 100123: used `return str.length-num + '...';` but it returns `str` as the number of characters.
- 100123: added conditions to `truncate.js`. need to modify condition 1 to show `...` at the end of the string if it's too long. Ie: if it exceeds the length passed in `num` argument.
- 221222: refer to `return-string.js` and `len-function.js`. tested `.length` function and `condition` to return output `if` arguments: `num` > `str`. **next steps**: 1. use conditions in `truncate.js`. 2. build out third condition to add `...` to the end of the string if `num` > `str`.
- 211222: started