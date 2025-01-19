let arr1 = ["m", "a", "r", "y"];
let arr2 = ["a", "a", "r", "m", "y"];

const hasAllValue = arr1.every(element => {
    // return arr2.includes(element)
    // console.log(arr2.includes(element));
    if (arr2.includes(element)) {
        console.log(true);
        
    } else {
        console.log(false);
    }
})
// console.log("test");