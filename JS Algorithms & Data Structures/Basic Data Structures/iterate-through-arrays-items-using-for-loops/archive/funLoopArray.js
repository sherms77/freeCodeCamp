// iterate over an array in a function and show the value of each item
// refer to comments made on 14 Apr 2022 in README.md file

function camping (campItems) {
    gear = []; // initialises a new array
    for (let i = 0; i < campItems.length; i++) {
        gear.push([i]); // adds items from campItems array to gear array
        return gear[i]; // iterates over gear array and outputs each item in a veritcal format
        
        // THESE STATEMENTS DON'T WORK AS INTENDED - AKA THEY DON'T ITERATE OVER THE ARRAY BECAUSE THE CONSOLE LOG STATEMENT OUTSIDE THE FUNCTION, THAT'S INTENDED TO CALL THE FUNCTION, IS OUTPUTTING THE ARRAY VALUES.
        // return campItems[i]; // returns values from the array in a horizontal format
        // console.log(campItems[i]);// prints values from the array in a linear format
        // return console.log(campItems[i]);// prints values from the array in a linear format
    }
}

// console.log(campItems = ['tent', 'boots', 'backpack', 'water bottle']); // outputs array values without the use of the function
// let campItems = ['tent', 'boots', 'backpack', 'water bottle']; 
// console.log(campItems); // outputs array values saved in variable

console.log(campItems = ['tent', 'boots', 'backpack', 'water bottle']); // using this line to test gear array in function - this method works. iterates over new gear array that's initialised in the function.
