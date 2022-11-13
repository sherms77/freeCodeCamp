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

# notes
- 141122: experimented with `.length()` and `charAt()` methods to try and `find` the correct method in the `str` argument by using the `target` and `str` arguments to calculate it. refer to `end_char.js` and `end.js`.
- 131122: testing `.endsWith()` method to see how it works. refer to `endsWith.js`. accidentally saw part of a solution. migh be able to use `.length` method with `target` argument.
- 131122: trying to use **regex**. refer to https://regexr.com/728ue and `regexMatching.js`.
- 101122: refer to notes to `sub.js` and `end.js`
- 140722: experimented with the substing method. refer to `sub.js`.
- 140722: started