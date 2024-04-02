
function mutation(arr) {
    // console.log(arr[0].toLowerCase());
    console.log(arr[0]);
    console.log(arr[0].includes(arr[1]));
    
    // for (var i = 0; i < arr.length; i++) {
    //     console.log(arr[i].toLowerCase());
    // }
//   return arr;
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