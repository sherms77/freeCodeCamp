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

# resources
1. [Node.js: printing to console without a trailing newline?](https://stackoverflow.com/questions/6157497/node-js-printing-to-console-without-a-trailing-newline)
2. [vertical output and horizontal output to console.log](https://stackoverflow.com/questions/66914835/vertical-output-and-horizontal-output-to-console-log)
3. [process.stdout docs](https://nodejs.org/api/process.html#processstdout)
4. [How to print console without trailing newline in Node.js ?](https://www.geeksforgeeks.org/how-to-print-console-without-trailing-newline-in-node-js/)
5. [Javascript for loop console print in one line](https://stackoverflow.com/questions/33089739/javascript-for-loop-console-print-in-one-line)

# challenge code
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);

# notes
- 131222: code still does not pass all tests in challenge. refer to screenshot. got it to work correctly in `for_loop.js`. **next step**: 1.debug code in `repeat.string.js`.
- 121222: experimenting with link `5` in `resources` section. unable to get it to work correctly. refer to `for_loop.js`.
- 111222: got conditions to work but need to print output in a `horizontal` format. **next step**: 1.read resources to try and work out. `loop_outputs.js` shows how to print in a table format using `nested for loops`.
- 101222: tested code in fcc editor. tried a return statement and a console.log statement. did not work. problem is with conditions. `repeat-string.js` has some incorrect outputs. refer to lines `21 and 25` in file for more info. I think I need to flatten the output too so it's not printed in a `horizontal` format not a `vertical` one.
- 251122: refer to `repeat-string.js`. code does not work. does not multiply `str` by `num`. will also need to remove condition 1 as outputting `*` is acceptable.
- 241122: tested for loop. refer to `for_loop.js`.
- 241122: started