# fcc challenge
- [where do i belong](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong)

# challenge
Return the lowest index at which a value (second argument) **should be inserted** into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

eg: [3,5,19,20] - `19` should be inserted at index `2`.

# steps
1. insert element from `argument 2` into the array.
1. sort elements in the array so they are in ascending order.
2. return the index of where the `second argument` has been inserted.

# questions
1. how do i sort the elements in an array?

# resources
1. [16.9: Array Functions: sort() - Topics of JavaScript/ES6](https://www.youtube.com/watch?v=MWD-iKzR2c8&t=182s)
2. [JavaScript Sort Array - How to Sort an Array Accurately](https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/)
3. [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
4. [JavaScript ES6 Arrow Functions Tutorial](https://www.youtube.com/watch?v=h33Srr5J9nY)

# lesson code
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);

# tests
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([40, 60], 50) should return a number.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([3, 10, 5], 3) should return a number.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([5, 3, 20, 3], 5) should return a number.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 20, 10], 19) should return a number.
getIndexToIns([2, 5, 10], 15) should return 3.
getIndexToIns([2, 5, 10], 15) should return a number.
getIndexToIns([], 1) should return 0.
getIndexToIns([], 1) should return a number. - unsure what output of this test should be?

# notes
- 010424: **solved** lesson. refer to `where-do-i-belong.txt` for solution. removed `else if` statement and code worked.
- 200324: revised code in fcc editor to use `return` statements. got mixed results. passed some tests. **NEXT STEP**: 1. debug code. revised code:
```
function getIndexToIns(arr, num) {
  // adds new element
  arr.push(num);

  // sorts array
  arr.sort((a, b) => a - b);

  // iterates array
  for(let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // check if the element is >= num
    if (arr[i] >= num) {
      return arr.indexOf(val);
      break;
    } 
    
    // handles if element is <= num
    else if (arr[i] <= num) {
    return arr.indexOf(val);
    }

  }
}

getIndexToIns([40, 60], 50);

```
- 200324: this version of the code fails all tests in fcc editor. gets correct output in my tests in node.js. i don't think fcc lets me add the new element to the array to get the correct output. ie: I'm not allowed to `mutate` the orginal array. refer to `where2.js` for code.
```
function getIndexToIns(arr, num) {
  // adds new element
  arr.push(num);

  // sorts array
  arr.sort((a, b) => a - b);

  // iterates array
  for(let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // check if the element is >= num
    if (arr[i] >= num) {
      console.log(arr.indexOf(val));
      break;
    } 
    
    // handles if element is <= num
    else if (arr[i] <= num) {
    console.log(arr.indexOf(val));
    }

  }
}

getIndexToIns([40, 60], 50);

```
- 180324: refer to `where2.js`. is the error in my logic for the `else` or `else if` statement the fact that `num` is not added to the array which means the `output` cannot return the `index` of where the `new element` will be inserted?
- 170324: unable to get alternate condition to work where `if element is <= num -> output: num or index of element`. refer to debugger. trying to debug and understand what's happening. when I use `else` or `else if` statement, test: `getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.` fails but it passed prio to adding the `else` or `else if` statement. code i tried in fcc editor:
```
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length; i++) {
    // let val = arr[i];
    if (arr[i] >= num) {
      let val = arr[i];
      return (arr.indexOf(val));
    } else if (arr[i] <= num) {
      let val2 = arr[i];
      return (arr.indexOf(val2))
    } 
    
    // else {
    //   return num;
    // }

  }
}

getIndexToIns([40, 60], 50);
```
- 160324: Need to add a condition to this case: If the array elements are <= 'num'.
- 160324: updated `line 60` in my code below to `if (arr[i] >= num)`. passed 12/16 tests. didn't pass last `4` tests.
- 150324: ran this code in fcc editor. passed 9 tests. need to analyse and debug.
```
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      let val = arr[i];
      return (arr.indexOf(val));
    }
  }
}
```
- 010324: refer to `where.js`. working out how to check for the first number that is **bigger** than `num` and then return the index of that number.
- 010324: looked at hint. first hint is to sort the array. second hint says "check for the first number that is **bigger** and return the index. **bigger** than what? -> check for the first number that is **bigger** than the number in the second argument of the function - `num`.
- 260224: refer to `where.js`. working out how to get the `index` of where the element in the `second` argument from the function has been `inserted`.
- 260224: unable to understand example in `arrow.js` file. refer to video in point `4` in **resources**.
- 260224: unable to get the `regular` function to work in `arrow.js`. don't know where i need to declare the `person` variable to understand the difference in scoping variables between a `regular` function and an `arrow` function. left comment on video and posted question in JS fb group. **Next steps**: 1. understand why my code isn't working. 2. workout where to declare variable to understand difference in variable scoping between `regular` and `arrow` functions.
- 250224: tryiing to understand example in video in point `4` in **resources**. where does the `person` variable need to be defined for it to work? example explanation is confusing when explaining **variable scoping**.
- 250224: unsure how `arrow` function in article in point `3` works. refer to `findIndex.js` file. **steps**: 
  1. finish watching example in video in point `4` in **resources**.
  2. understand how `arrow` function works in `findIndex.js` file.
- 230224: refer to `indexOf.js`. researching how to return which index an array element is located at. refer to **steps** section. need to follow steps to put `where` function together.
- 230224: got advice from [fb post](https://www.facebook.com/groups/1605550896386197/permalink/3693868514221081/?mibextid=c7yyfP).
- 190224: still confused by how example sort comparison function works. refer to `sort.js`. posted question in fb group: "HTML, CSS & Javascript." watched video in link 1 in **resources** but still don't understand.
- 170224: refer to `sort.js`. trying to understand example from fcc article. **debug** the example to understand what's happening.
- 170224: find out how to sort the elements in an array so they are in ascending order.
- 170224: started. setup files.