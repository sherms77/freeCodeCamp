# fcc challenge
- [finders keepers](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers)

# challenge
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

# rules
1. needs to look through an array and return the first element.
2. to return the first element, it needs to pass a `truth test`.
3. the `truth test` is: `if` argument `(x)` in the `func` function is `true` return -> the `first element`. `if` `false` return -> `undefined`.

# questions
1. understand what's being passed to the function in the argument for function `findElement(arr, func)`.

# resources

# challenge code
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

# notes
- 120123: started