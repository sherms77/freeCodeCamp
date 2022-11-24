# fcc challenge
- [repeat a string repeat a string](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string)

# challenge
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

# rules
1. if `num` is not a positive number, return an **empty** string.
2. do not use `.repeat()` method.

# conditions
1. test if `str` is an integer -> if **NO** return `str`
2. test if `num` is a **POSITITVE** number -> if no return `""`

# steps

# challenge code
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);

# resources

# notes
- 251122: refer to `repeat-string.js`. code does not work. does not multiply `str` by `num`. will also need to remove condition 1 as outputting `*` is acceptable.
- 241122: tested for loop. refer to `for_loop.js`.
- 241122: started