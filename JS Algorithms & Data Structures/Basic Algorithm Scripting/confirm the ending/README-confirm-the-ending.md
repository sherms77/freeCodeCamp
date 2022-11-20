# fcc challenge
- [confirm the ending](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending)

# challenge
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

# rules
1. the target sting has to be at the end of the string
2. the target string can vary in length. Eg: 
  - str = "Hello", target = "o" - result = true
  - str = "Hello", target = "lo" - result = true

# steps
1. find a substring at the end of a sting based on the length of the substring `passed` to the `second argument`. 

# challenge code
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");

# resources
1. [match ending string patterns](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-ending-string-patterns)
2. [restict possible usernames](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames)
3. [check for all or none](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-all-or-none)
4. [positive and negative lookahead](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead)
5. [JavaScript String substring()](https://www.w3schools.com/jsref/jsref_substring.asp)
6. [Regex to extract substring, returning 2 results for some reason](https://stackoverflow.com/questions/3486359/regex-to-extract-substring-returning-2-results-for-some-reason)
7. [String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#:~:text=The%20includes()%20method%20performs,true%20or%20false%20as%20appropriate.)
8. [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
9. [Regular expressions test() and match()](https://www.youtube.com/watch?v=W7S_Vmq0GSs)
10. [RegExp object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#:~:text=The%20expression%20new%20RegExp(%2F,in%20a%20string)%20are%20necessary.)
11. [How to use JavaScript Regex both literal notation and regexp object constructor method with examples](https://www.youtube.com/watch?v=DCnD10KjLYM&t=373s)
12. [Object.values() in JavaScript](https://www.geeksforgeeks.org/object-values-javascript/#:~:text=values()%20method%20is%20used,is%20applied%20to%20the%20properties.)

# methods pros and cons

## regex method

### pros
- more precise matching
- multi-character matching

### cons
- how to pass string in argument to regex within function

## charAt and length method

### pros
- match the characters at the end by using .length-1

### cons
- have to rely on index positions
- difficult to make index postions dynamic
- cannot match mult-character strings


# notes
- 211122: used solution in reply to my [freeCodeCamp post](https://forum.freecodecamp.org/t/confirm-the-ending-new-regexp-method/572286?u=sherms77). it works. refer to `end.js` for final solution and comments. also saved final solution as `confirm-the-ending.txt`.
- 191122: was able to create a method that tests a condition to get the appropriate output - refer to `end.js`. but I unable to add the `$` to the end of the regex of a function **argument** that is passed to the `new RegExp()` method. I asked for help in the [freeCodeCamp forums](https://forum.freecodecamp.org/t/confirm-the-ending-new-regexp-method/572286?u=sherms77). I also asked Kavita for help. Sent her link to my post. **Next steps**: 1. Review responses to my post.
- 181122: refer to `end.js` - trying to use .test() method to test condition and then output correct result. refer to link **8** in resources.
- 181122: tried to use `.includes()` method but did not work as it locates the substring to be found anywhere in the parent string. it needs to only be at the end of the parent string. refer to link **7** in resources.
- 141122: experimented with `.length()` and `charAt()` methods to try and `find` the correct method in the `str` argument by using the `target` and `str` arguments to calculate it. refer to `end_char.js` and `end.js`.
- 131122: testing `.endsWith()` method to see how it works. refer to `endsWith.js`. accidentally saw part of a solution. migh be able to use `.length` method with `target` argument.
- 131122: trying to use **regex**. refer to https://regexr.com/728ue and `regexMatching.js`.
- 101122: refer to notes to `sub.js` and `end.js`
- 140722: experimented with the substing method. refer to `sub.js`.
- 140722: started