
function mutation(arr) {
    console.log("Original array:", arr);
    newArr = [];

    // convert characters in each element to lower case
    // might need to use a loop to convert both elements in the array to lower case + sort each element in alpha order

    for(let i = 0; i < arr.length; i++) {
        // arr[i].toLowerCase(); // convert characters in each element to lower case
        
        console.log("Converted to lower case:", arr[i].toLowerCase()); // convert characters in each element to lower case
        
        var sortStr = arr[i].split("").sort().join(""); // sorts characters in each string
        
        console.log("Sorted characters:", sortStr);
        
        newArr.push(sortStr);
    }

    console.log("New Array:", newArr)
    console.log(newArr[0].includes(newArr[1])); // check if characters in element 1 is present in element 2
    // return arr;
}

// mutation(["NO", "hello", "hey"]);

// tests
// mutation(["hello", "hey"]) // should return false. - WORKS
// mutation(["hello", "Hello"]) // should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true. - WORKS

// mutation(["Mary", "Army"]) // should return true. - DOES NOT WORK

mutation(["Army"]) // ADDED BY ME
mutation(["Mary"]) // ADDED BY ME

// mutation(["Mary", "Aarmy"]) // should return true.
// mutation(["Alien", "line"]) // should return true.
// mutation(["floor", "for"]) // should return true.
// mutation(["hello", "neo"]) // should return false. - WORKS
// mutation(["voodoo", "no"]) // should return false.
// mutation(["ate", "date"]) // should return false.
// mutation(["Tiger", "Zebra"]) // should return false.
// mutation(["Noel", "Ole"]) // should return true.