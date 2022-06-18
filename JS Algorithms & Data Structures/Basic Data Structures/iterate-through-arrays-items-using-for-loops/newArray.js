// let c = ['tent', 'boots', 'backpack', 'water bottle'];
// let newArr = [];
// for (let j = 0; j < c.length; j++) {
//     let value = c[j]; // outputs the value from the array and saves it in a variable
//     newArr.push(value); // pushes value to newArr array
//     console.log(newArr[j]); // iterates over newArr array and prints values
// }

function campTrip (items) {
    let newArr = [];
    for (let j = 0; j < items.length; j++) {
        let value = items[j]; // outputs the value from the array and saves it in a variable
        newArr.push(value); // pushes value to newArr array
        console.log(newArr[j]); // iterates over newArr array and prints values
        // return newArr[j];
    }
    
}

campTrip(['boots', 'jacket', 'tent']); // outputs values from newArr array in function
// console.log(campTrip(['fire', 'map', 'compass'])); // this statement only prints first value when I use the return statement in the function but iterates and outputs values when i use the console.log() statement in function.