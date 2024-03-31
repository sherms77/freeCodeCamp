# fcc challenge
[Mutations](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations)

# challenge
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

# steps
1. traverse each character in each element
2. compare them
3. if the characters in element `2` are present in element `1`, return `true`. else `false`.

# rules
1. if all the **characters** are present in both elements, then the result should be `true`. it does not have to be the **same** word to return `true`.
2. ignore case when comparing elements

# questions
1. should i take each element and put it in its own array so I can loop through it and compare the elements/characters in each array? 

# resources

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
- 010424: try to answer question 1 in **questions** section.
- 010424 started. setup files.