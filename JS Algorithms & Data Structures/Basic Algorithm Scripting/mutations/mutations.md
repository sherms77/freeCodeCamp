# fcc challenge
[Mutations](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations)

# challenge
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

# steps
1. sort the characters in the string in each element alphabetically
2. compare them to see if the characters in element `2` are present in element `1`
3. if the characters in element `2` are present in element `1`, return `true`. else `false`.

# rules
1. if all the **characters** are present in both elements, then the result should be `true`. it does not have to be the **same** word to return `true`.
2. ignore case when comparing elements

# questions
1. how can i ignore case? - use `.toLowerCase()`
2. how can i only compare characters in a `string`? - use `.includes()`. refer to resource 2 in **resources** section.
3. should i take each element and put it in its own array so I can loop through it and compare the elements/characters in each array? - no. refer to ansers to questions 1 and 2.

# resources
1. [[JavaScript] - How to ignore case in JavaScript?](https://www.shecodes.io/athena/37854-how-to-ignore-case-in-javascript#:~:text=To%20ignore%20case%20in%20JavaScript%2C%20you%20can%20use%20one%20of,to%20perform%20case%2Dinsensitive%20comparisons.)
2. [Compare Two Strings in JavaScript](https://www.scaler.com/topics/compare-two-strings-in-javascript/)
3. [.indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp)
4. [mutations hint](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-mutations/16025)
5. [How to make Array.indexOf() case insensitive in JavaScript ?](https://www.geeksforgeeks.org/how-to-make-array-indexof-case-insensitive-in-javascript/)
6. [match letters in an array case insensitive javascript](https://www.google.com/search?q=match+letters+in+an+array+case+insensitive+javascript&oq=match+letters+in+an+array+case+insensitive+javascript&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCTQyMzUzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8)
7. [return one output when comparing strings in two arrays](https://www.google.com/search?q=if+strings+in+two+arrays+match+only+return+one+output%2C+true+or+false&sca_esv=519e96c50f78252e&sxsrf=ADLYWIKGmbkK0cyL2x2DKGlJcCmOBAIe9A%3A1736278709788&ei=tYJ9Z9TqL8bvseMP7rKjsAw&ved=0ahUKEwiUmemdruSKAxXGd2wGHW7ZCMYQ4dUDCBA&uact=5&oq=if+strings+in+two+arrays+match+only+return+one+output%2C+true+or+false&gs_lp=Egxnd3Mtd2l6LXNlcnAiRGlmIHN0cmluZ3MgaW4gdHdvIGFycmF5cyBtYXRjaCBvbmx5IHJldHVybiBvbmUgb3V0cHV0LCB0cnVlIG9yIGZhbHNlMgQQIRgKSIe1A1C8K1jeswNwBngBkAEImAH5DaABlt0BqgETMC4yNy4yNi4yLjEuNy41LjQuMrgBA8gBAPgBAZgCQKACuIYBwgIKEAAYsAMY1gQYR8ICChAjGIAEGCcYigXCAhAQLhiABBjHARgnGIoFGK8BwgILEAAYgAQYkQIYigXCAgoQABiABBhDGIoFwgIEECMYJ8ICDhAuGIAEGMcBGI4FGK8BwgILEC4YgAQYsQMYgwHCAgsQABiABBixAxiDAcICERAuGIAEGLEDGNEDGIMBGMcBwgIIEC4YgAQYsQPCAgUQLhiABMICCBAAGIAEGLEDwgIFEAAYgATCAgoQABiABBgUGIcCwgILEAAYgAQYhgMYigXCAgYQABgWGB7CAggQABiABBiiBMICBRAAGO8FwgIFECEYoAHCAgUQIRifBcICBxAhGKABGArCAggQABiiBBiJBcICBBAhGBWYAwCIBgGQBgiSBw81LjIzLjI0LjIuNC4zLjOgB7L0Ag&sclient=gws-wiz-serp)

# lesson code
```
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

# tests
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
mutation(["ate", "date"]) should return false.
mutation(["Tiger", "Zebra"]) should return false.
mutation(["Noel", "Ole"]) should return true.

# notes
- 120124: refer to `mutations3.js` trying to simpify code to only compare the elements in `arr1` and `arr2` - `if (arr1[i] === arr2[i])`. i added a `break` statement as soon as it returns `true` for the first `condition`. only problem is it needs to compare the all the elements in the string and then return `true` `once` if everything matches and `false` `once` if there is `one non-match`.
- 100124: revised the code in `mutations2.js` again to set an `else if` statement to output `true` if there is a `match`. i used: `else if (arr1.indexOf(arr2[i]) === 1)`. it didn't work.
- 100124: updated the code in `mutations2.js` with `break;` statements at the end of each condition to limit the output to `1` `true or false` statement. it doesn't output the correct result for some arrays. its stopping
- 080124: need to work out how to return `one` result/output. need to look into comparing the `length` of the arrays to set a condition that will only return `one output`. refer to point `7` in `resources`.
- 070124: refer to `mutations2.js`. line `38` returns multiple outputs. returns `true` `3` times. line `31` returns `4` outputs. `3` `true` and `1` `false`. unsure why. looks like the multiple outputs is what's causing the tests to fail in the fcc console. it should only return `1` output to verify that `letters` are in `each string`.
- 301224: looking into converting elements in both arrays to **lower** case by using `.toLowerCase()` method. Eg: `str.toLowerCase()`. refer to **points 5 & 6** in **resources**.
- 280424: refer to `debugging` web console and `mutations2.js`. worked out that is should use 
`arr1.indexOf(arr2[i])`. iterating both arrays with `[i]` was not right for **checking** if `characters` in 
`arr[2]` was in `arr[1]`.
- 280424: refer to `mutations2.js`. combining length of `arr1` and `arr2` to use as number of times to loop over charachters didn't work. used `arr1.length` instead. that gave a better result but it returns the incorrect result for some tests.
- 270424: refer to `mutaions2.js`. trying to loop over elements in `arr1` and `arr2` to check if all the characters in `arr2` are present in `arr1`. problem is trying to create the `paramater` for the second `argument` in the `for loop` that will loop over **all** characters in **both** arrays.
- 260424: refer to `mutations2.js`. converted the strings in `arr` into `lower case` and then `split` the strings, in each element into seperate `characters` and saved them into their own `arrays`. need to work out how to use 
`.indexOf()` to compare the characters to get the desired result.
- 260424: working out how to `split` the sting into characters for each element in the the array. refer to `mutations2.js` and `split.js`.
- 250424: `.split()` method automatically puts the characters into an array. need to work out how to compare the characters of each `character/element` in the split array to determine if they both exist and then return `true` if that's the case. looking into using `.indexOf()` to do it but there is a challenge as it will return the **first** instance of the character and return a result. Eg: `let text = hello;` `console.log(indexOf("l"));` will return `2` as that is the first instance of `l` in `hello`. refer to `split.js`, `loop.js` and `index_of.js`.
- 250424: have to workout how to split the characters in each word in the array. refer to `split.js`.
- 250424: looked at hint. refer to `mutations2.js`.
- 190424: refer to `includes.js`. trying to understand behaviour of `.includes()`. if two characters are **not** together in the string it will return `false`. you can search the string from a starting index position. can possibly create a method to search the string from the start and end to find the appropiate characters. it may still prove problematic if the characters are not together - eg: `elno` and `elo` -> characters `elo` is not next to eachother/together in `elno`.
- 170424: ran this code in fcc editor. it fails two tests - passes 9/11. fails `mutation(["Noel", "Ole"]) should return true` and `mutation(["floor", "for"]) should return true.` issue is the **characters** have to be in the **exactly** the same in the same sequence to meet the condition. Eg: `elno and elo` will not return `true` because `n` is in `elno`. tried seeing if other methods would work like `.indexOf()` `boolean operators`, `.match()`, `.test()`, `regex` and `.replace()`. Those methods don't appear to help resolve the issue. `regex` could work with `test` but will be difficult to establish how to get the right `regex` to check if characters exist in both `elements`. you possibly have to get the `regex` to update dynamically and to use both elements in the array to check eachother. the other option is to use a `standard pattern` but the problem is it may be too broad or limited in scope and will return **false positives or negatives**. also check notes from **130424** which discusses `sequencing` problem.
- 130424: refer to notes in `regex2.js`. trying to work out how to use it with either `.test()` or `.match()` to check if the characters in one element exists in the other.
- 130424: refer to `regex.js` and `regex2.js`. trying `regex` method to check if **characters** exist in both strings **regardless** of their sequence.
- 130424: refer to `string_compare.js`. the problem is that the string has to be in the exact same sequence in each element to return true. eg: for "elo" to be detected in "elnoqrst" the "n" cannot be in the middle of "el" and "o".
- 120424: refer to `string_compare.js`, `mutations.js` and `debugging console`. cannot get these type of tests to return `true`: `mutation(["Noel", "Ole"])` and `mutation(["floor", "for"])`. have to keep debugging these tests to understand why my conditions to check if the characters are present in each element does **not** work.
- 120424: i was missing this line in my code: `return newArr[0].includes(newArr[1]);`. added it. passed 9/11 tests.
- 120424: refer to `mutations.js`. set variable to save element converted to lower case. that worked to address alpha sort issue discussed in note on `070424`. now this test no longer works `mutation(["Mary", "Aarmy"]) // should return true. - DOES NOW WORK??` unsure if it failed with previous code. might need to check. however, i tested code in fcc console and it fails all tests. code from fcc console below. unsure if i should keep working on this code or look for new method to check if characters are `present` in each element?
```
function mutation(arr) {
    var newArr = [];

    for(let i = 0; i < arr.length; i++) {
        var lower = arr[i].toLowerCase(); 
        var sortStr = lower.split("").sort().join("");
        newArr.push(sortStr);
    }

    return newArr;
}
```
- 070424: refer to `sort.js`. element `Mary` does not alpha sort with an uppercase `M`??
- 050424: refer to `mutations.js`. putting together how to **sort** charachters in alpha order, then **check** if characters in element `2` are present in element `1`.
- 030424: need to think how to sort characters in string in alphabetical order before i can check if one string is inlucded in the other.
- 030424: `.includes()` requires characters to be in order to detect its present in the other `string`.
- 030424: refer to answers in questions `1` and `2` in **questions** section. also refer to `string_compare.js`.
- 030424: revised questions in **questions** section. answered question `1`.
- 010424: try to answer question 1 in **questions** section.
- 010424 started. setup files.