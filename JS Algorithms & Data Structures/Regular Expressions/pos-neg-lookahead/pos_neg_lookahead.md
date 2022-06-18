# Restrict possible usernames challenge
Link: [positive and negative lookahead challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead)

# Links
- [regex video](https://www.youtube.com/watch?v=rhzKDrUiJVk)
- [checker - regexes](https://regexr.com/)

# Rules
1. Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
2. Your regex should use two positive lookaheads.

# Requirements
password has to be:
1. > 5 characters long.
2. use two consecutive digits.

regex should:
3. use two positive lookaheads.

# Code from challenge
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

# Explanations
- a POSITIVE lookahead will look to make sure the element in the search pattern is there but WON'T actually match it.
- a NEGATIVE lookahead will look to makesure the element in the search pattern is NOT there.

# Questions
1. do i need to make sure the element in the search pattern is there and NOT match it or
 - yes. challenge rules say that it should use two positive lookaheads. positive lookaheads do this.

2. do i need to makesure the element in the search pattern is NOT there? or
 - no. refer to answer in quetion 1.

3. do i need to do both?
 - no. refer to answer in quetion 1.

4. how do i only find patterns > 5 characters long?
 - use positive lookaheads to look for and not match: 
 	- search for characters longer than 5 characters, and
 	- have two consecutive digits.

 - lookahead 1: /(?=\w{6,})/ 
 - lookahead 1 explanation:
 	1.?= - look for but don't match
 	2.\w - all letters and numbers
 	3.{6,} - six or more characters long
 	
 - lookahead 2: /(?=\d\d}/
 	1.?= - look for but don't match
 	2.\d\d - all numbers, two consecutive digits
 	
# Test cases
1. Your regex should not match the string astronaut
2. Your regex should not match the string banan1
3. Your regex should match the string bana12
4. Your regex should match the string abc123
5. Your regex should not match the string 12345
6. Your regex should match the string 8pass99
7. Your regex should not match the string 1a2bcde
8. Your regex should match the string astr1on11aut

# Solutions
- a. /(?=\w{6,})(?=\d\d)/ - failed 4/9 tests
- b. /(?=\w{5,})(?=\d\d)/ - failed 4/9 tests
- c. /(?=\w{1,5})(?=\d{3,})/ - failed 4/9 tests
- d. /(?=\w{1,5})(?=\D{1,1}\d{2,}$)/i - fails 1/9 tests | BEST RESULT
- e. /(?=\w{1,5})(?=\D{1,1}\d{2,})/i - PASSED ALL TESTS

# Notes 
- 040122: solution (e) passed all tests. refer to positive-and-negative-lookahead.txt for code explanation.
- 040122: solution (d) fails test 8.
- 030122: next step - test solution (c) in regex checker.
- 030122: my logic in my answer to question 4 and solutions a and b is incorrect. I should be ignoring patterns that are less than 5 characters long and do not contain two consecutive numbers. solution c logic seems to be correct but stil failed 4/9 tests. i think my second regex is flawed.
- 030122: read explanation again. challenge rules say that it should use two positive lookaheads - only positive lookaheads required.
- 311221: read explanation for positive and negative lookaheads again and look at examples to get a better understanding. need to establish which one is required, for each requirement, and why. wrote solution (a) but have not tried yet.
- 311221: started.
