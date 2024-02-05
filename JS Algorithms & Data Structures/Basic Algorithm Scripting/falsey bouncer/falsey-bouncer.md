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
2. convert each value to a `boolean`
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
- 060224: used `slice()` to copy `arr`. researching how to convert a value to a `boolean`. refer to point 2 in resources.
- 300124: started. setup files.