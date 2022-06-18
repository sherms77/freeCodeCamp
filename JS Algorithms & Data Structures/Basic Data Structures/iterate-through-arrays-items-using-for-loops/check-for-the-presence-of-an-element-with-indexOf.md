# FCC challenge
- (iterate through all an array's items using for loops)[https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops]

# Explanation
JavaScript offers severalbuilt in methods that iterate over arrays in slightly differentl ways to achieve different results (such as ``every()``, ``forEach()``, ``map()``, etc), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

# Example
```
function greaterThanTen(arr) { \\ creates a function
  let newArr = []; \\ initializes an empty array
  
  \\ sets conditions for the for loop
  for (let i = 0; i < arr.length; i++) { 
    
    \\ if statement - if the array element is greater than 10, add it to the new array ``newArr``.
    if (arr[i] > 10) { 
      newArr.push(arr[i]); \\ adds the element to the new array
    }
  }
  return newArr; \\ returns the new array
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

# Challenge
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. 

Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

# Questions
1. what is the input?
 - A: the function takes two arguments:
   1. arr -> a nested array.
   2. elem -> an element that represents an element that ``may or may not`` be in one or more arrays.

2. what is the output of the function?
 - A: returns a new array which is a filtered version of the passed array so that ``ANY array`` nested with in ``arr`` that contains ``elem`` has been ``REMOVED``.

3. how do i check if an element is in an array?
 - A: 
  - you can use the ``.includes()`` method. refer to the link 2 in the ``Links`` section.
  - ``.includes()`` does not work on nested arrays. ``.find()`` may work better. refer to links 3 and 4 in the ``Links`` section. watch video in link 5.

4. how do i find the element in the array and remove it?
 - A: ???

5. what is the best way to remove it and return the updated array? Ie: ``.splice`` or ``.filter``? - read article 1 in ``Links`` section
 - A: ???


# Links
1. (9 Ways to Remove Elements From A JavaScript Array - Plus How to Safely Clear JavaScript Arrays)[https://love2dev.com/blog/javascript-remove-from-array/]
2. (JavaScript Array includes())[https://www.w3schools.com/jsref/jsref_includes_array.asp]
3. (Array.prototype.find())[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find]
4. (JavaScript Array find())[https://www.w3schools.com/jsref/jsref_find.asp]
5. (Array 'find' method in JavaScript (Array.prototype.find) - JavaScript Tutorial For Beginners)[https://www.youtube.com/watch?v=N1QcR8F3xFY]
6. (Array.prototype.indexOf()
)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf]
7. (Array.prototype.findIndex()
)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex]
8. (if...else
)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else]
9. [8 Must Know JavaScript Array Methods](https://www.youtube.com/watch?v=R8rmfD9Y5-c)
10. [Creating Array and Fetching Elements in JavaScript](https://www.youtube.com/watch?v=TScHu-37Cqw)
11. [nested array loop in javascript](https://www.codegrepper.com/code-examples/javascript/nested+array+loop+in+javascript)

# Code
```
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# Solutions

# Notes
- 100522: used hints to solve challenge. an `else` statement was not required. refer to `iterate-through-all-an-arrays-items-using-for-loops.txt` for the solution. did not complete all tasks or answer all the questions in this file as I solved the challenge. 
- 220422: worked out how to access values from a nested array using `bracket` notation, refer to `nestedArray.js`. i need to `iterate` over nested arrays using a `nested for loop` refer to link `11` in the `links` section. IF CANNOT ACCESS THE VALUES FROM THE NESTED ARRAY AND CHECK IT AGAINST THE CONDITION FOR THE `IF ELSE` STATEMENTS, CONSIDER LOOKING AT THE HINT FOR THE CHALLENGE. IF I CANNOT SOLVE THE CHALLENGE BY `FRIDAY 29 APRIL`, LOOK UP SOLUTION. Refer to photo in one drive for info about logic for this task - `iterate-nested-array.png`.
- 210422: i was able to get the `if else` statements to work to check if the item passed to the `newItem` argument is in the array and provide the correct output. i am unable to do this for `nested` arrays. NEXT STEP: 
  1. I NEED TO UNPACK THE VALUES IN THE `CHILD` ARRAYS SO THEY CAN BE CHECKED AGAINST THE `newItem` ARGUMENT TO SEE IF THE `CONDITION` IS MET TO PRINT THE RIGHT OUTPUT. 
- 200422: NEXT STEP:
  1. Refer to `ifElseFunLoopArray.js` file and set up `two conditions` using `if else` statements to provide different `outputs` if a `value` `is` or is `not` in an array passed to an `argument` for the `function`. - `DONE`
- 200422: refer to `newArray.js` worked out how to iterate over `original` array, `push` the values to a `new` array and then iterate over the `new` array and print the values from the `new` array. i nested the `for loop` in a function and got the correct output - ie: printed the values from the `new` (copy of the original) array when i iterated over it.
- 150222: created `funLoopArray2.js` to try and work out how to print values from a new array (copy of another array by having values pushed to it from the original array). discovered that when you try to push an index number to a new array and try to print the value in the new array it returns the index number. if you save the value from the original array by using the index number to return it and then save it to a varaible and then push that variable to the new array, it will return the value in the new array when you console.log() it. APPLY THIS METHOD TO THE FOR LOOP TO GET THE VALUES TO PRINT THAT HAVE BEEN PUSHED TO THE NEW ARRAY FROM THE ORIGINAL ARRAY. -> THIS ALL RELATES TO TRYING TO GET THE IF ELSE CONDITION TO CHECK 'VALUES' FROM AN ARRAY AGAINST THE CONDITION AND NOT THE 'INDEX NUMBER'. added new video to link 10 in `links` section. watched some of it.
- 140422: did not finish watching video in link 9 as it does not help explain iterating an array with a for loop in a function. the main problem is calling the function with the `console.log()` statement. it does output the values of the new array from the function. it outputs the values of the array in the statement. I MIGHT NEED TO POST THE PROBLEM IN THE FB GROUP BUT IT MIGHT BE MORE WORTHWHILE TO POST THE WHOLE PROBLEM - IE: GETTING THE IF ELSE STATEMENTS TO WORK CORRECTLY IN THE FUNCTION. I WILL POST MY ENTIRE DRAFT SOLUTION TO TRY AND SOLVE THE CHALLENGE.
- 140422: i tested the code from `funLoopArray.js` (from original file created on 10 Apr 2022) in `replit.com` again to see if it iterates over the array as intended - ie: outputs values from new array in a vertical format. It does not. I may have looked at the output from a different file when i recoreded the comments in the file.
- 140422: watching video in link 9 in links section to better understand array methods.
- 110422: tried to replicate `funLoopArray.js` in `ifElseFunLoopArray.js` and add and ``if else`` statement to it. `funLoopArray.js` does not output same result as yesterday? Unsure why. I did not change the code. NEED TO WORK OUT WHY THIS IS HAPPENING.
- 100422: created files `noFunArray.js`, `loopArray.js` and `funLoopArray.js` to see how loop iteration works and to get it to work in a function. i was able to get it to work in the function in `funLoopArray.js`. this allowed me to see the values being outputted with iteration in a function. NOW I NEED TO: 
1. OUTPUT EACH VALUE FROM AN ARRAY 
2. CHECK THAT VALUE AGAINST THE CONDITION -> WHICH IS TO SEE IF THE VALUE EXISTS IN THE ARRAY AND THEN EXECUTE THE APPROPRIATE STATEMENT.
- 080422: worked on `returnArr.js` file to try and get `.indexOf()` method to work to return value from array after it has iterated over it using a `for loop`. Worked on it for about 10 mins. Was unable to get it to work. NEED TO READ OVER `.indexOf()` article again.
- 070422: still having trouble getting ``if else`` statement to work. when the else statement is added it always determines that the condition is false??. i tried using the `.indexOf()` method. i got it to work previously - ie: it returned the value from the array when found. however, i changed the code and then tried to revert back to the original version and now it does not work - it returns -1, indicating that the element is not in the array -> it does not pass test. `STILL NEED TO WORK OUT HOW TO GET THE CONDITION AND RETURN VALUES TO WORK CORRECTLY IN THE IF ELSE STATEMENTS.` i read links 6-8 in the `Links` section. Read over again if required.
- 050422: identified issue with the ``if else`` statements in the ``function`` in the ``find.js`` file. the statement returned the index number and not the specific element. subsequently, the condition in the ``if`` statement was not met. need to work out how to return the specified element to meet the condition. NEXT STEPS:
 1. find out how to return an element from an array.
 2. get the ``if else`` statement to work correctly in ``function`` in the ``find.js`` file. - `DOING`
 3. answer questions in the ``questions`` section. - `DOING`
- 040422: working on find.js file. trying to set-up if else statement. if statement being skippied, unsure why??? used JS visualizer to analyse code. NEED TO GET THAT TO WORK CORRECTLY. THEN ANSWER QUESTIONS.
- 030422: created find.js file to experiment with iterating through an array and finding a specified element. NEXT STEPS:
 1. experiment with the find.js file to make sure i can find the specified element correctly. - ``DOING``
 2. finish answering questions in the ``questions`` section. - ``DOING``
- 290322: experimented with the .find() method. it does not work on nested arrays. NEXT STEPS:
 - 1. watch video in link 5 in ``Links`` section. - DONE
 - 2. answer questions in ``questions`` section. - IN PROGRESS
- 280322: finished step 4 under note from 250322. Need to finish steps 1 and 2 under second note from 250322.
- 250322: created file ``filter.js`` to experiment with code. wrote out steps. started to write pseudo code. NEXT STEPS:
 1. finish step 3 below. - DONE
 2. answer questions 3-5 in ``questions`` section. - DOING
- 250322: populated the file. NEXT STEPS:
 1. review challenge to understand what the output should be. - DONE.
 2. answer my questions. - DONE
 3. create a diagram to show how the function should work. - NOT REQUIRED
 4. write pseudo code to step out how the function should work. - DONE
- started 25 March 2022