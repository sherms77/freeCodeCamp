
function mutation(arr) {

    // convert characters in each element to lower case
    // might need to use a loop to convert both elements in the array to lower case + sort each element in alpha order

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i].toLowerCase()); // convert characters in each element to lower case
        var sortStr = str[i].split("").sort().join(""); // sorts characters in each string
        // add them to a new array?
        // then check if characters in newArr[1] is present in newArr[2] outside of loop?
    }

    // sort characters in both elements in alphabetical order

    // check if characters in element 1 is present in element 2
    
    console.log(arr[0]);
    console.log(arr[0].includes(arr[1]));

    // return arr;
}

// mutation(["NO", "hello", "hey"]);

// tests
// mutation(["hello", "hey"]) // should return false.
// mutation(["hello", "Hello"]) // should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true.
// mutation(["Mary", "Army"]) // should return true.
// mutation(["Mary", "Aarmy"]) // should return true.
// mutation(["Alien", "line"]) // should return true.
// mutation(["floor", "for"]) // should return true.
// mutation(["hello", "neo"]) // should return false.
// mutation(["voodoo", "no"]) // should return false.
// mutation(["ate", "date"]) // should return false.
// mutation(["Tiger", "Zebra"]) // should return false.
// mutation(["Noel", "Ole"]) // should return true.