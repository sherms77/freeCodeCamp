
function mutation(arr) {
    // console.log("Original array:", arr);
    newArr = [];

    for(let i = 0; i < arr.length; i++) {
        var lower = arr[i].toLowerCase(); // convert characters in each element to lower case
        var sortStr = lower.split("").sort().join(""); // sorts characters in each string
        newArr.push(sortStr);
    }

    console.log("New Array:", newArr)
    console.log(newArr[0].includes(newArr[1]) || newArr[1].includes(newArr[0])); // check if characters in element 1 is present in element 2
    // return arr;
}

// mutation(["NO", "hello", "hey"]);

// tests
// mutation(["hello", "hey"]) // should return false. - WORKS
// mutation(["hello", "Hello"]) // should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true. - WORKS

// mutation(["Mary", "Army"]) // should return true.
mutation(["Mary", "Aarmy"]) // should return true. - WORKS

// mutation(["Alien", "line"]) // should return true.
// mutation(["floor", "for"]) // should return true.
// mutation(["hello", "neo"]) // should return false. - WORKS
// mutation(["voodoo", "no"]) // should return false.
mutation(["ate", "date"]) // should return false.
// mutation(["Tiger", "Zebra"]) // should return false.

mutation(["Noel", "Ole"]) // should return true. - DOES NOT WORK??