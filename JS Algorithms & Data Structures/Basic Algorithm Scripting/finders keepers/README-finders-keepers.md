# fcc challenge
- [finders keepers](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers)

# challenge
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

# rules
1. needs to look through an array and return the first element.
2. to return the first element, it needs to pass a `truth test`.
3. the `truth test` is: `if` argument `(x)` in the `func` function is `true` return -> the `first element`. `if` `false` return -> `undefined`.

# questions
1. understand what's being passed to the function in the argument for function `findElement(arr, func)`. when does it make argument `func` in the parent function `findElement(arr, func)` `true` in order to pass the `truth test`.
2. what are `arrow` functions and how do they work?

# resources
1. [ES6: Arrow Functions](https://javascript.plainenglish.io/es6-arrow-function-784f8848d271)
2. [What is the inline function in JavaScript ?](https://www.geeksforgeeks.org/what-is-the-inline-function-in-javascript/)
3. [Arrow Functions - Beau teaches JavaScript](https://www.youtube.com/watch?v=22fyYvxz-do)
4. [THIS keyword - Beau teaches JavaScript](https://www.youtube.com/watch?v=eOI9GzMfd24)
5. [hint](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-finders-keepers/16016)

# challenge code
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

# notes
- 030124: solved lesson. set num === 8 as specified in the test for the lesson.
- 030124: my logic is flawed (logic error). it's always going to be arr_element != num which will always return `undefined`. need to put in a `test` to check if `arr_element === num` if `true` return `num` if `false` return `undefined`.
- 020124: unsure how to look through array correctly and check if each element meets the condition. the else statement repeats the number of times the length of the array. the if statement works ok. refer to `test.js`.
- 010124: trying to workout how to check and verify if num is in array. need to know how to set num and then check if it meets condition
- 240123: decided to forget about trying to workout if I can put an `if` condition into `expression 2` of the for loop. can possibly refactor code if this is possible. currently trying to understand how `num` is passed to the `arrow` function and if and how I need to use `num` to traverse the `array` in the `arr` argument. read `hint`. refer to `finders.js` and link `5` in `resources`.
- 210123: traversed array in `trav_arr.js`. working out how and where to put `if` condition. will test and ask group if I can put `if` condition in `expression 2` in `for` loop statement. refer to `finders.js`.
- 200123: need to get/traverse each inidividual element from an `array`. refer to `trav_arr.js` -> `look for solution`. did some `scafolding` in `finders.js` to step out `algorithm`.
- 200123: still watching video in link `4` in `resources`. will finish later.
- 190123: watched video in link `3` in `resources`. finish watching video in link `4` in `resources`.
- 160123: finish watching video in link `3` of `resources`. in response to question in comment on `130123`, i think arrow functions can only live within another method, class, object or as an argument for another function. its designed to not to be `reusable`. Ie: one time use to help perform an operation or for one time execution.
- 160123: read link `1` in `resources`.
- 130123: how can i call an `arrow` function? can I call it or can it only live as an argument within another function? finish reading link `1` in resources. also refer to `arrow.js` for testing.
- 130123: reading about `arrow` functions - aka an `inline` or `anonymous` function.
- 120123: setup repo and wrote README file. broke down problem into rules and started to identify questions.
- 120123: started