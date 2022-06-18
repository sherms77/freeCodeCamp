// v2 of funLoopArray.js

function camping (campItems) {
    gear = []; // initialises a new array
    for (let i = 0; i < campItems.length; i++) {
        
        gear.push([i]); // adds items from campItems array to gear array
        
        // return gear[i]; // returns values but does not print anything
        // console.log(gear[i]); // prints indexes not array values
        // console.log(gear); // prints each index on multiple lines, adds the next index with each iteration
    }
}

camping(['tent', 'boots', 'backpack', 'water bottle']);



// testing behaviour when printing values from an existing array and a new array that has had values from the existing array added to it


let c = ['tent', 'boots', 'backpack', 'water bottle'];
let newArr = [];
for (let j = 0; j < c.length; j++) {
    // let recentValue = [j];
    // newArr.push(recentValue);
    newArr.push([j]);
    // console.log(c[j]);
    console.log(newArr[j]);
}

// for (k = 0; k < newArr.length; k++) {
//     console.log(newArr);
// }


// testing push method to add new values to an array
// let b = [];
// b.push('hello');
// // console.log(b);

// // test to add values from one array to another
// let original = ['hi', 'there', 'you'];
// let copy = [];

// // copy.push([2]); // should add value 'you' from original array - adds index 2 and prints index 2
// // copy.push(2); // adds value 2  to the array
// // copy.push('cool'); // adds 'cool' to array
// // copy[1].push(); // undefined error

// let newValue = original[2];

// // console.log(newValue);

// copy.push(newValue); // IF I SAVE THE VALUE RETURNED BY USING THE INDEX NUMBER TO RETURN THE VALUE FROM THE ORIGINAL ARRAY TO A VARIABLE AND THEN PUSH THAT TO THE NEW ARRAY, IT WILL PRINT THE VALUE USING THE CONSOLE.LOG() STATEMENT
// console.log(copy);

