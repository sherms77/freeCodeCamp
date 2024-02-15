# fcc challenge
- [falsey bouncer](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer)

# challenge
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.


# tests
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
You should not mutate arr.

# rules
1. remove all falsy values from an array - eg: false, 0, "", undefined, NaN
2. do not mutate `arr` - will need to copy `arr`

# questions
1. what is a "falsy" value? **a:** Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
2. how to copy `arr` to a new array **a:** use `slice()` method to copy `arr`. refer to `copySlice.js`
3. how to convert each value to a `boolean`
4. how to remove each `falsy` value after converting them to `boolean`
5. how to convert `boolean` values back to the original values or how to keep the original values intact?

# steps
1. copy `arr` - **DONE**
2. convert each value to a `boolean` - **DONE**
3. iterate/check each element in the array
4. find the `false` values
5. remove the `false` values
6. return copied array without `false` values

# resources
1. [What are Falsy Values in JavaScript? Explained with Examples](https://www.freecodecamp.org/news/what-are-falsey-values-in-javascript/)
2. [How can I convert a string to a boolean in JavaScript?](https://sentry.io/answers/how-can-i-convert-a-string-to-a-boolean-in-javascript/#:~:text=The%20Solution,false%E2%80%9D%20string%20to%20a%20boolean.)

# lesson code
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);

# notes
- 160224: `falsy.js` passes tests in node.js but does not pass tests in **fcc editor**. unsure if use of `!!` is allowed in **fcc**. **Next steps**: 1. debug current code in `falsy.js`. 2. explore alternative methods to convert vaues to a boolean and test if its **true** or **false**.
- 150224: building out `falsy.js` with each component.
- 150224: refer to `function_add.js`. how to use `.push()` to add new elements to an array. will need to avoid adding them to the array as **nested** arrays. 
- 140224: refer to `boolean.js`. still trying to append values to an array if it meets a condition. it keeps setting the array to **empty** in my logic everytime I execute the code. have to work out how get it to append the array after the first value has been saved and the condition is met. might need to use a loop?
- 100224: refer to `boolean.js`. trying to get array elements to be added to the same array and print out new elements one at a time in a new array. the elements are not **appended** to the array.
- 100224: refer to `falsy.js`. tyring to convert **values** back from `boolean` values and `return` new array with `true` values only.
- 100224: need to work out how to:
  1. check each element in the array
  2. find the `false` ones
  3. **remove** them
  4. `return` the array with the `false` values **reomved**
- 100224: refer to `boolean.js`. converted values to **primitive booleans**.
- 060224: used `slice()` to copy `arr`. researching how to convert a value to a `boolean`. refer to point 2 in resources.
- 300124: started. setup files.