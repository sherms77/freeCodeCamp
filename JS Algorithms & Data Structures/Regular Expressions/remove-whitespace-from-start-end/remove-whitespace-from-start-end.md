# Restrict possible usernames challenge
- [Use Capture Groups to Search and Replace](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end)

# Useful links
- [regexr link](regexr.com/6fgsi)
- [stackoverflow solution](https://stackoverflow.com/questions/7381641/regex-matching-beginning-and-end-strings)
- [substitutions in regular experssions - microsoft docs](https://docs.microsoft.com/en-us/dotnet/standard/base-types/substitutions-in-regular-expressions)
- [Using Regex to find and replace text in Notepad++](https://www.technical-recipes.com/2020/using-regex-to-find-and-replace-text-in-notepad/)

# Explanations
You can use a regex with the appropriate string methods to find and remove whitespace.

# Challenge
Write a regex and use the appropriate STRING METHODS to remove whitespace at the beginning and end of strings.

Note: The 'String.prototype.trim()' method would work here, but you'll need to complete this challenge using regular expressions.

# Rules
1. result should be equal to the string Hello, World!
2. Your solution should not use the String.prototype.trim() method.
3. The result variable should not directly be set to a string
4. The value of the hello variable should not be changed.

# Code from challenge
```
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

# Questions
1. How do i find multiple whitespaces in a string using a regex?
 - A: let wsRegex = /\s+/

2. How do i store the regex in a variable?
 - A: refer to the answer in question 1. 

3. How do i use the regex to remove the whitespaces?
 - A: i need to replace the white space with no white space. 
 
4. What method do i use to remove the whitespaces?
 - A: i can use the .replace() method to do it. i need to find the whitespaces in the string and then replace them with no white spaces.
 - \S will find non-whitespace characters.

5. How do i avoid setting the result variable to a string?
 - A: let result = hello.replace(wsRegex, \S+);

6. What syntax do i use in the replace method to use the regex metacharacter and quantifier '\S+' in my regex to replace whitespace with non-whitespace and not have the metacharacter and quantifier output to the console?
 - A: Do i have to put it in a regex? - did not work. refer to solution 3.
 - A: ???

7. How do i keep the white space between "Hello, World!".
 - A: ???

8. How do i match whitespace at start and end of the string in the same regex?
 - A: ???

# Solutions
1. 
```
let hello = "   Hello, World!  ";
let wsRegex = /\s+/; // Change this line
let result = hello.replace(wsRegex); // Change this line
```

2. 
```
let hello = "   Hello, World!  ";
let wsRegex = /\s+/; // Change this line
let result = hello.replace(wsRegex, '\S+'); // Change this line
```

3. 
```
let hello = "   Hello, World!  ";
let wsRegex = /\s+/;
let result = hello.replace(wsRegex, /\S+/);
```

4. 
```
let hello = "   Hello, World!  ";
let wsRegex = /\s+/;
let remove = /(\S+)(\s)/ ;
// let replace = '$1 $2 $1';
let result = hello.replace(wsRegex, '$1 $2 $1');
```

5. 
```
let hello = "   Hello, World!  ";
let wsRegex = /\s+/;
let remove = /(\S+)(\s)/ ;
let replace = '$1 $2 $1';
let result = hello.replace(wsRegex, replace);
```

6. 
```
let hello = "   Hello, World!  ";
let wsRegex = /\s+/;
let remove = /(\S+)(\s)/ ;
// let replace = "$1 $2 $1";
let result = hello.replace(wsRegex, "$1 $2 $1");
```

7. 
```
let hello = "   Hello, World!  ";
// let wsRegex = /\s+/;
let removeWhiteSpace = /(\S+)(\s)/ ;
let whitespaceRemoval = "$1 $2 $1";
let result = hello.replace(removeWhiteSpace, whitespaceRemoval);
```

8. 
```
let hello = "   Hello, World!  ";
let wsRegex = /(\S+)(\s)/;
// let removeWhiteSpace = /(\S+)(\s)/ ;
let whitespaceRemoval = "$1 $2";
let result = hello.replace(wsRegex, whitespaceRemoval);
```

9. 
```
let hello = "   Hello, World!  ";
let wsRegex = /(^\S+$)/;
// let removeWhiteSpace = /(\S+)(\s)/ ;
let whitespaceRemoval = "$1";
let result = hello.replace(wsRegex, whitespaceRemoval);
```

10. 
```
let hello = "   Hello, World!  ";
let wsRegex = /(^\S+$)/;
// let whitespaceRemoval = "$1";
let result = hello.replace(wsRegex, "$1");
```

11. 
```
let hello = "   Hello, World!  "; // original string
let wsRegex = /(^\s+)|(\s+$)/; // 1. finds what you want to replace -> matches whitespace at the start and end of the sting
let replaceWith = /(^\S+)|(\S+$)/; // 2. replace with -> negative whitespace
let result = hello.replace(wsRegex, replaceWith); // 3. replace
```

12. 
```
let hello = "   Hello, World!  "; // original string
let wsRegex = /(^\s+)|(\s+$)/; // 1. finds what you want to replace -> matches whitespace at the start and end of the sting
// let replaceWith = /(^\S+)|(\S+$)/; // 2. replace with -> negative whitespace
let replaceWith = ''; // 2. replace with -> negative whitespace
let result = hello.replace(wsRegex, replaceWith); // 3. replace
```

# Solution
```
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
```

# Hints
To solve this challenge you simply have to create a regex string that matches any spaces at the beginning or at the end of the string.

## Hint 1
Think of how you can select substrings at the beginning or end of a string.

## Hint 2
Think of how you can select whitespace

# Notes 
- 240222: looked at solution. i was close. needed to put the /g flag at the end and use a blank string inbetween the quotation marks as the replacement value. my solution (solution 12) worked in vs code. refer to remove-whitespace-from-start-and-end.txt for solution with explanation.
- 240222: solution 12 did not work in fcc. will look up solution.
- 240222: solution 12 works. unsure if it will work in fcc because it uses a string as the replacement value.
- 240222: solution 11 does not work. inserts the literal regex, stored in the ```replaceWith``` variable in the console output.
- 230222: did some research to try and work out how to find and replace with regex. found two links - saved in links section. also updated code with methodology and comments -> refer to whitspcace.js. NEXT STEPS:
 1. go over links again. - DONE
 1. try new methodology. - DONE
 3. if new methodology doesn't work, look up solution.
- 190222: worked out how to match whitespace at the start and end of the string - saved pattern in regexr.com. also got a better understanding of how the replace function works. still having trouble trying to strip the whitespace from the start and end of the string using a regex and the replace function.
- 160222: looked at hints. experimented with regexes to match start and end of string in same regex in regexr - did not save all variations, was not successful so far. if i can't solve by saturday - 18 Feb 2022, look at solution.
- 160222: solutions 9 and 10 work in vs code but not in fcc.
- 150222: solution 8 did not work. puts whitespace at the start and possibly at the end too. Might need to use ^ and $ to strip whitespace from start and end.
- 150222: solution 7 did not work. outputs ' Hello,   Hello,World!'
- 150222: solutions 5 and 6 do not work, same output as solution 4.
- 140222: solution 4 did not work. outputs '$1 $2 $1Hello, World!'.
- 140222: tried to answer question 6. solution 3 did not work.
- 110222: NEXT STEP:
 1. Answer questions 6-7.
- 110222: tested solution 2 in the console and result produces:
 - 'S+Hello, World!    ' -> it removes the whitespace from the start but does not remove it from the end and it outputs the \S+ metacharacter and quantifier.
- 110222: solution 2 met rules 3-4. Need to keep the whitespace between "Hello, World!".
- 100222: populated file and drafted questions. NEXT STEP:
 1. Answer questions. - DONE
- 090222: NEXT STEPS: 
 1. Populate the rest of the file. - DONE
 2. Work out questions. - DONE
- 090222: solution 1 did not work.
- 090222: STARTED.