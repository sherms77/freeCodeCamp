# Restrict possible usernames challenge
- [Use Capture Groups to Search and Replace](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace)

# Useful links
1. [2.9: Regular Expressions: replace()-Programming with text](https://www.youtube.com/watch?v=7a-a6lKoyIQ&list=PLRqwX-V7Uu6YEypLuls7iidwHMdCM6o2w&index=9)
2. [word boundaries](https://www.youtube.com/watch?v=csKPnCyzw7w)
3. [Question about solution - FCC forum]https://forum.freecodecamp.org/t/how-does-this-solution-work-regex/459864()

# Explanations
- You can search and replace text in a string using .replace() on a string.
- The inpurt for .replace() is first the regex pattern you want to search for.
- The second parameter is the string to replace the match or a function to do something.

## Example 1 - Search and replace text in a string using .replace()
```
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```
The replace call returns the string "The sky is blue.".

- You can also access capture groups in the replacement string with dollar signs ($).
## Example 2 - Access capture groups in replacement string with dollar signs ($)
```
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```
The replace call would return the string Camp Code.

# Challenge
Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

# Rules
1. You should use .replace() to search and replace.
2. Your regex should change the string one two three to the string three two one
3. You should not change the last line.
4. fixRegex should use at least three capture groups.
5. replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).

# Code from challenge
```
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# Questions
1. Where do I place the capture groups?
- CLUE: It says make sure you are utilizing capture groups in the REPLACEMENT string.
- A: the capture groups should be placed after the replaceText call back in result variable. 

# Test cases

# Solutions
1. 
```
let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // Change this line
let replaceText = "three two one"; // Change this line
let result = str.replace(fixRegex, replaceText, '$1, $2, $3');
```

2. 
```
let str = "one two three";
let fixRegex = /(one) (two) (three)/; // Change this line
let replaceText = "three two one"; // Change this line
let result = str.replace(fixRegex, replaceText, '$3, $2, $1');
```
ERROR: 
// running tests
replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).
// tests completed
FAILED TEST
- replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).

3. 
```
let str = "one two three";
let fixRegex = /(one)(two)(three)/; // Change this line
let replaceText = "(three) (two) (one)"; // Change this line
let result = str.replace(fixRegex, replaceText, '$1 $2 $3');
```
ERROR:
// running tests
Your regex should change the string one two three to the string three two one
FAILED TEST
- replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).
// tests completed

4. 
```
let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // Change this line
let replaceText = "three two one"; // Change this line
let result = str.replace(fixRegex, replaceText, '$1 $2 $3');
```

# Notes 
- 050222: NEXT STEP: 1. Write out code explanation in solution file.
- 050222: looked up solution. my solution (solution 4) worked but it was not the exact solution fcc wanted. I can see that fcc's solution allowed for a wider search and match which is more effective than a specific search and match. Refer to use-capture-groups-to-search-and-replace.txt for solution.
- 050222: looked at hint - inserted blank spaces between capture groups in fixRegex (did this previously with actual spaces). tried solution 4 in the console and it works but does not work in FCC editor? - Still get error: "replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group)." 
- 040222: watched video in link and tried solution 3. unsure how to parenthesize the string in the replaceText variable?
- 030222: analysed error in solution 2. experimented with a few variations to address the error (did not record them) was unable to resolve. watching video in link 1 in useful links section. trying to answer question in questions section by watching this video. NEXT STEP:
 1. Finish video in link 1 in useful links section. - DONE
- 020222: solution 2 did not work. failed 1/4 tests. refer to solution for error and failed test. NEXT STEP:
 1. Answer question 1 in questions section.
- 020222: populated file. - DONE
- 290122: NEXT STEP:
 1. populate this file. - DONE
- 290122: started.
