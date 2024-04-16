# fcc challenge
[Mutations](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations)

# challenge
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

# steps
1. sort the characters in the string in each element alphabetically
2. compare them to if the characters in element `2` are present in element `1`
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