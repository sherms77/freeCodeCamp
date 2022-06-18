# Restrict possible usernames challenge
- [Reuse Patterns Using Capture Groups](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups)

# Useful links
1. [2.4: Regular Expressions: Capturing Groups - Programming with Text](https://www.youtube.com/watch?v=c9HbsUSWilw)
2. [2.5: Regular Expressions: Back References - Programming with Text](https://www.youtube.com/watch?v=Z66TeSTcP-Q)
3. [regex checker link](regexr.com/6dskh)
4. [hint 3 example: regex cheker](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-reuse-patterns-using-capture-groups/301364)

# Explanations
1. capture groups lets you find repeated substrings.

2. capture groups are constructed by enclosing the regex pattern in parentheses.

3. the substring matched by the group is saved to a temporary variable.

4. it can be accessed by the NUMBER of the capture group - I DON'T UNDERSTAND THIS. 
- a. IS EACH GROUP NUMBERED OR IS THE NUMBER USED TO SPECIFY THE NUMBER OF CHARACTERS OR WORDS TO CAPTURE IN THE GROUP? THIS SUGGESTS THAT EACH GROUP IS CAPTURED. EXAMPLE CODE GIVEN IS UNCLEAR. 'row, row, row' APPEARS THREE TIMES IN THE STRING. '\1 \1' IS USED IN THE EXAMPLE CODE AND IT RETURNS ' "row row row", "row" ' - 
- b. I DON'T UNDERSTAND WHERE THE FOURTH 'row' COMES FROM? THE FIRST CAPTURE GROUP IS NUMBERED ONE AND RETURNS THE THREE 'rows' IN A ROW. WHY IS THE SAME CAPTURE GROUP - CAPTURE GROUP \1, USED AGAIN AND WHY DOES IT ONLY RETURN ONE 'row'? SHOULDN'T IT RETURN THE SAME RESULT AS THE FIRST ONE? IE: THREE 'rows' IN A ROW?

- Answers to questions in point 4: 
1. When you do a regular expression search, it does a match.
2. It then automatically assigns the match to a group and its called "group 0."
3. If you put parenthesis around a section of the regular expression, you create a sub group.
4. each sub-group is numbered accordingly after 0 (the initial capture group/whole regular expression).
- EG: 
 - ph no. to match: 212-555-1234
 - regex: \d{3}-\d{3}-\d{4}\ - auto assigned to "group 0"
 - \d{3}-(\d{3})-\d{4}\ - part in parenthesis of the full match should be captured seperately/additionally as a different group. It is "group 1."

5. capture groups are automatically numbered by the position of their opening parenthesis.

# Code from challenge
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

# Challenge
Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times seperated by single spaces.

# Rules
1. Your regex should use the shorthand character class for digits.
2. Your regex should reuse capture groups twice.
3. Match a string that only consists of the same number exactly three times.
4. It needs to be seperated by single spaces.

# Questions
1. What is the shorthand character class for digits?
- /d

2. How do I use capture groups twice?
- \1 - references capture group 1 (\0 is the whole pattern, initial pattern).

3. How do I match the SAME number exactly THREE times?

4. How do I seperate it by single spaces?

# Test cases
1. Your regex should use the shorthand character class for digits.
2. Your regex should reuse a capture group twice.
3. Your regex should match the string 42 42 42.
4. Your regex should match the string 100 100 100.
5. Your regex should not match the string 42 42 42 42.
6. Your regex should not match the string 42 42.
7. Your regex should not match the string 101 102 103.
8. Your regex should not match the string 1 2 3.
9. Your regex should match the string 10 10 10.

# Solutions
a. /(\d+) \1 \1/ - failed 1/9 tests. falied test 5.
b. /(\d+)|(\d\d+)|(\d\d\d+)/ - tried this in regex checker but it fails tests 5-8. 

# Notes 
- 280122: FINISHED challenge. looked up solution. refer to reuse-patterns-using-capture-groups.txt for solution.
- 280122: tried to replicate hint 3. i couldn't. i copied and pasted hind 3 into regexr. it didn't work. unsure if i am reading the explanation incorrectly but it doesn't work base on my understanding of it.
- 270122: Still having trouble excluding test 5 from pattern. Hint 3 talks about thinking about how I can assert the start and end of the string. I tried to replicate the example in hint 3 but failed. It worked the first time but when I tried to do it again it didn't work. NEXT STEP:
 1. Try to replicate hint 3. - DONE
 2. Try to Google info on how to exclude a pattern if required.
 3. Think about looking up solution. Been working on this for over 2 weeks. Didn't work on for a few days due to covid.
- 250122: solution (a) works effectively but I need to exclude. matching the pattern in test 5. It should not match the same number more than 3 times in a row. NEXT STEP: 
 1. Google how to do this.
- 240122: broke down challenge further and created rules 3 and 4. created questions and started to experiment with variations in regex checker. NEXT STEP:
 1. Answer questions 3 and 4.
- 240122: used solution (a). failed test 5.
- 200122: finished step 4. work on challenge. complete step 5 if required.
- 200122: watched video in link 2 in USEFUL LINKS section. Finished step 3 UP TO STEP 4 in note from 120122.
- 130122: finished steps 1-2 below. NEED TO WATCH VIDEO IN LINK 2 IN USEFUL LINKS SECTION BEFORE MOVING ON TO STEP 3.
- 120122: next steps: 
 1. read explantion again - DONE
 2. look up another explanation for capture groups - DONE
 3. answer my questions in the explanations section - DONE
 4. populate rules section - DONE
 5. populate questions section if required
- 120122: started.
