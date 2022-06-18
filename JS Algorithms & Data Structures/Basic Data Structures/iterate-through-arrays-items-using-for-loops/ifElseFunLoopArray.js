// for loop nested in a function with an if else statement
// for loop iterates the array 
// checks if it meets a condition
// then returns the desired the result

function camping (campItems) {
    gear = []; // initialises a new array
    
    for (let i = 0; i < campItems.length; i++) {
        gear.push([i]); // adds items from campItems array to gear array
        return gear[i]; // iterates over gear array and outputs each item in a veritcal format 
        // console.log(gear[i]);

        // if (gear[i] === item) {
        //     return "Your item is in the list";
        // } else {
        //     return "The item is not in the list";
        // }
    }
}

// console.log(campItems = ['tent', 'boots', 'backpack', 'water bottle'], 'boots');
console.log(campItems = ['tent', 'boots', 'backpack', 'water bottle']);