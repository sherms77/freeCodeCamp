# Restrict possible usernames challenge
Link: [challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames)

# Links
- [regex video](https://www.youtube.com/watch?v=rhzKDrUiJVk)
- [checker - regexes](https://regexr.com/)
- [possible usernames solution requires knowledge not introduced](https://forum.freecodecamp.org/t/restrict-possible-usernames-solution-requires-knowledge-not-introduced/395660)
- [solutions](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-restrict-possible-usernames/301363)

# Rules
1.Usernames can only use alpha-numeric characters.
- should use character class [A-Z+]

2.The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
- $\d*

3.Username letters can be lowercase and uppercase.
- \i

4.Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
- refer to solution under rule 1.

# Questions
1. How do I find alpha-numeric characters?
A: \w = matches this character class -> [A-Za-z0-9_]

2. How do I find a number at the end of the string?
A: $ = searches for patterns at the end of the string.

3. How do I find lower and uppercase letters?
A: /i = matches upper and lowercase characters.

4. How do I find a username that is at least two characters long? - a two character username can only use alpha letters as characters. Unsure if I need to apply a restriction to achieve this? Also, rule 2 only finds numbers at the end, so this might achieve this by default? However, does not exclude symbols - Eg: !, $, etc.

A: I think I need to apply a lazy match.
? = lazy match

# Info
^ - searches for patterns at the start of a string
[^] - ignores characters specified in the class
$ - searches for charactes at the end of the string
\d - matches all numbers between 0-9
'+' - occurs 1 or more times in a row
'*' - occurs 0 or more times in a row
? - lazy match

# Code from challenge
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

# Regex solutions
a./\w$?/i - did not work. gave me a syntax error. unsure why it rejected the use of the lazy match.

b./\w./i - fails 5/13 tests - refer to test-results screen shots.

c./\w$/ig - need to ignore symbols - did not try this one

d./ \w[^\d]+ $\d*/i - fails 6/13 tests - refer test results 171221 file.

e./\w+$\d*/i - fails 7/13 tests

f./[A-Z]/i - fails 5/13 tests

g./[a-z][^\d]/i - fails 4/13 tests

h./^[a-z][^\d]/i - fails 3/13 tests - SECOND BEST RESULT

i./^[a-z][^\d]?/i - fails 5/13 tests - lazy match does not work effectively

j./^[a-z][^\d]$\d/i - fails 6/13 tests - $ to find all nums at the end does not work effectively

k./^[a-z][^\d]$\d?/i - fails 5/13 tests - combines i and j solutions.

l./^[a-z]$\d/i - fails 6/13 tests

m./^[a-z^\d]/i - fails 7/13 tests

o./^[a-z^\d]$\d/i - fails 6/13 tests

p./^.[a-z]/i - fails 2/13 tests - BEST RESULTS SO FAR

q./^.[a-z]$\d/i - fails 6/13 tests but passes: "Your regex should not match the string BadUs3rnam3"

r./$\d*/i - fails 6/13 tests but passes: "Your regex should match the string Z97" 

s.^[a-z].\d$ - refer to note dated 251221

# Flow of regex b
1. w - finds a character in this class: [A-Za-z0-9_] - includes numbers anywhere in the string
2. . - wildcard: matches any one character - includes symbols
3. /i - ignores case

# Restrictions
- How do i ignore numbers at the start and not anywhere else?
I need the $ or an exlclusion?

- How do I ignore symbols?

# solution b - failed tests
1. should not match 007 - only numbers - fail
2. should not match A1 - number at the start - fail
3. should not match BadUs3rnam3 - number in the middle - fail
4. should not match c57bT3 - number near the start - fail
5. should not match J%4 - uses a symbol - fail

# solution h - failed tests
1. should not match BadUs3rnam3 - number in the middle - fail - need to ignore number in the middle
2. Your regex should match the string Z97 - need to match numbers at the end
3. Your regex should not match the string J%4 - uses a symbol - fail - need to ignore symbol.

# Notes 
- 291221: applied solution 2 - refer to restrict-possible-usernames-solution.txt. added forum link about this challenge including concpets not yet taught. refer to links section. also added link to solutions - in links section above.
- 291221: majority of voters in the amigos code fb group voted to check the solution. decided to check it.
- 281221: asked amigos code group on fb if i should look up the solution. 
- 281221: Tried applying some differecnt methods from regex video and stack overflow. tried positive look behind and excluding specific non-compliant passwords. all methods failed. with excluding specific non-compliant passwords, it also affects compliant ones and some of the bahavior is strange. if I use \d but try to exclude 3, it does not seem to exclude 3. it seems to work correctly for other numbers. did not record my results so my conclusions might be flawed. saw a heading on fcc forum about this challenge. it said that fcc are applying concepts in this challenge that have not been taught previously.


- 251221: tried this in regex matcher and in FCC editor: /^[a-z].\d$/gim. got these results:
	- JACK -> matches nothing
	- JO -> matches nothing
	- OCEANS 11 -> matches nothing
	- BadUs3rnam3 -> matches nothing
	- Z97 -> MATCHES EVERYTHING
	- c57bT3 -> matches nothing
	
- 241221: watched video in link. trying this in regex checker -  /.[a-z$\d]/ against these tests:
	- J Jack Jo BadUs3rnam3 Z97 007 Oceans11
  not getting desired result.	
		
- 231221: Refer to regex video in links. Keep watching to try and understand matching at the start and end of a string. Test in regex checker (in links section).
- 231221: Refer to comments in solution r.
- 221221: the tests that are failing in solution p seem to be breaking this rule:
	- The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the 		  number.
  it's not finding the numbers at the end and ignoring numbers in the middle everywhere else.
  however, it does ignore 007 (successfully) but that is because the character class only finds letters between a-z in the second character.
	
- 221221: soultion q fails 6/13 tests but passes: "Your regex should not match the string BadUs3rnam3"
- 221221: solution p has best results so far. Fails 2/13 tests:
	1. Your regex should not match the string BadUs3rnam3
	2. Your regex should match the string Z97
	
- 211221: having trouble:
	- ignoring nums in the middle
	- matching a three character string with two nums at the end
	- ignoring symbols
	
- 211221: solution k fails 5/13 but passes - Your regex should not match the string BadUs3rnam3
- 211221: solutions i and j had worse results. however, j passed this test: "Your regex should not match the string BadUs3rnam3"
- 211221: solution h has the best results - fails 3/13 tests.
- 211221: solution g has the best results - fails 4/13 tests. successfully matches J.
- 201221: Go over rules and try to understand why its not ignoring patterns in failed tests.
- 201221: should use a character class for rule 1. \w matches numbers too. only want alpha characters at the start.
- 201221: solutions b and f has the best results.
- Go over rules and try to understand why its not ignoring patterns in failed tests.
- 201221: started working on this challenge around 17 Dec 2021.


