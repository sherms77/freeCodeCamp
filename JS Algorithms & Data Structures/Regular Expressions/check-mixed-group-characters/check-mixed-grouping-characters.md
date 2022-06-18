# Restrict possible usernames challenge
- [check for mixed grouping characters challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters)
- [regex tests](regexr.com/6crio)

# Rules
1. Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt 
2. It should do so in a case sensitive manner, and 
3. It should make concessions for middle names.
4. Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

# Code from challenge
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works

# Explanations
Parenthesis allows you to check for groups of characters using a regular expression.

# Questions
1. how do i check for Franklin Roosevelt or Eleanor Roosevelt in the same regex?
- /(franklin|elenaor(roosevelt)/ or
- /(franklin)(eleanor)|[a-z]\.roosevelt/

2. how do i make it ignore case?
- /REGEX/i

3. how do i make concessions for middle names?
- [a-z] - unsure where i should put this and if it should be:
	- an or, ie: |, and
	- how many characters should I allow for? ie: just one initial?

4. how do i search for a period in the regex?
- \.

5. how do i check it against myString and make it return true of false?
- let result = myRegex.test(myString) // .test tests condition and returns true or fails.

6. how do you exlcude entire string if one word is misspelt?
- use a positive lookup. positive lookup searches for the pattern and does not match it.

# Test cases
1. Your regex myRegex should return true for the string Franklin D. Roosevelt
2. Your regex myRegex should return true for the string Eleanor Roosevelt
3. Your regex myRegex should return false for the string Franklin Rosevelt
4. Your regex myRegex should return false for the string Frank Roosevelt
5. You should use .test() to test the regex.
6. Your result should return true.

# Solutions
a. - failed 3/6 tests
 1. /(franklin)(eleanor)|\.[a-z]roosevelt/i
 2. let result = myRegex.test(myString)
 
b. - failed 1/6 tests - BEST RESULT
  1. /(franklin)|(eleanor)|[a-z]\.roosevelt/i
  2. let result = myRegex.test(myString)
  
c.
 1. (franklin)|(eleanor)|[a-z]\.roosevelt|((?!franklin rosevelt))
 2. SAME AS SOLUTION B
 
d.
 1. ([^a-rosevelt])|(franklin)|(eleanor)|[a-z]\.roosevelt
 2. SAME AS SOLUTION B
 
e. THIS SOLUTION WORKS EFFECTIVELY AS WELL - ONLY FAILS 1/6 TESTS
 1. /franklin|eleanor| [a-z]\. roosevelt/i
 2. SAME AS SOLUTION B
 
f.
 1. /(franklin roosevelt)|(eleanor roosevelt)|(franklin [a-z]\. roosevelt)|(eleanor [a-z]\. roosevelt)[^franklin rosevelt]/i
 2. SAME AS SOLUTION B
 
# FCC Solution
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);

# Notes 
- 110122: refer to check-for-mixed-grouping-of-characters.txt for final solution.
- 110122: looked at comments for this solution. one user pointed out some flaws in FCC's solution. [my reply to moT01's comment](https://forum.freecodecamp.org/t/check-for-mixed-grouping-of-characters-js/460689/17?u=sherms77)
- 110122: solution f worked. passed challenge. my solution was very long and specific. FCC solution was more concise and had a better (wider) scope. interestingly, the FCC solution still passed test 3 even with the /i flag to ignore case. it ignored "franklin rosevelt.'
- 100122: solution e works effectively too. it works better than solution (d) in regexChecker because it captures "franklin D. roosevelt", "eleanor roosevelt" and "eleanor J. Roosevelt" correctly.
It still does not reject "franklin rosevelt" because it matches franklin. NEXT STEP: 1.Answer question 6.
- 070122: its failing test 3 because its matching 'franklin' in Franklin Rosevelt. Need to work out how to exclude franklin if surname is spelt incorrectly. Tried solution (c) and (d) in regex checker. they didn't work.
- 060122: next step: 1. test and modify solution (b) in regex checker.
- 060122: solution (b) gave best results. failed: 'Your regex myRegex should return false for the string Franklin Rosevelt.'
- 060122: answered questions 4 and 5.
- 050122: answer questions 4 and 5.
- 050122: started.
