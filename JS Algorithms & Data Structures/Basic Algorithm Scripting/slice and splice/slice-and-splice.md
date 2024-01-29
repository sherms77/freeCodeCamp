# fcc challenge
- [slice and splice](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice)

# challenge
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

# tests
1. frankenSplice([1, 2, 3], [4, 5], 1) // should return [4, 1, 2, 3, 5].
2. frankenSplice([1, 2], ["a", "b"], 1) // should return ["a", 1, 2, "b"].

// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]. 
3. frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) 

// All elements from the first array should be added to the second array in their original order. 
4. frankenSplice([1, 2, 3, 4], [], 0) // should return [1, 2, 3, 4].

5. // The first array should remain the same after the function runs.
6. // The second array should remain the same after the function runs.

# rules
1. elements from the `first` array **needs** to be copied into the `second` array.
2. the elements from `first` array needs to be **inserted** at index `n` in the `second` array.

# questions
1. how do i copy the elements from `arr1` to `arr2`?
2. how do i **insert** the copied elements at index `n` in `arr2`?
3. do i need to **unpack** `arr1` before i insert them into `arr2`?

# resources
1. [splice method](https://www.youtube.com/watch?v=FFas8cMHVwg)
2. [how to clone and array in JS](https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/)
3. [hints](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-slice-and-splice/301148)

# lesson code
function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

# notes
- 290124: looked up hints. following steps in hints. up to **hint 2**. refer to link 3 in resources and files `loop.js` and `slice_test.js`.
- 240124: refer to `copy.js` trying to use the `spread operator` to copy `arr1` into `arr2`. my method **pushes/replaces** the last element in `arr2`. trying to debug. refer to [debug console](https://pythontutor.com/render.html#mode=display).
- 190124: refer to `slice.js`. got code to pass all tests except test **6**. unsure how to make the second array stay the **same** after the function runs? need to understand this paramter better.
- 180124: i need to unpack the elements because the output should be `[4, 1, 2, 3, 5]`. the arrays should **not** be **nested** within eachother.
- 180124: got splice method to work as intended in `slice.js` but does not pass tests in `fcc`. something is wrong with my logic. REREAD lesson paramaters/rules. I need to **copy** the first array into the second array. does `.splice()` method **not** respect this rule?
- 160124: watching video in point 1 in resources to better understand `splice` method. refer to `copy.js`.
- 160124: fixed code to copy elements from **original** array only once. `let newArr = origArr.concat(arrAdd);`.
- 150124: refer to `copy.js`. `concat()` method adds/copies array elements from the **original** array twice?
- 150124: i misread/misunderstood the lesson. index `n` is where the elements from `arr1` **need** to be **inserted** into `arr2`.
- 110124: trying to understand where copied elements should be inserted in `arr2`. lesson says at index `n`. however, index `n` in some of the function calls is `1` but the copied elements is inserted at index `0` and only element `0` from `arr1` is inserted at index `0` in `arr2` and the last element in `arr2` is inserted at the end of `arr1`. Eg: in test 1 the elements in `arr1` are "sandwiched" between the elements in `arr2`.
- 110124: started. setup files.