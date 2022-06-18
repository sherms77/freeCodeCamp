function campTrip (items, newItem) {
    let newArr = [];
    let value;

    for (let j = 0; j < items.length; j++) {
        value = items[j];
        value = items[j][j]; // outputs the value from the array and saves it in a variable
        newArr.push(value); // pushes value to newArr array
        console.log(items[j]); // iterate over orginal array and print values -> DOES NOT WORK. ONLY PRINTS INDEX[1] FROM FIRST NESTED ARRAY AND THEN BOTH VALUES FROM THE FIRST NESTED ARRAY.

        // console.log(items[j][j]); // try to print each value from nested arrays 

    }
    





    // checks if the item is in the array - if it is, prints `this item is in the list`
    // if (value === newItem) {
    // if (value[j][j] === newItem) {
    //     console.log('this item is in the list');
    // }

    // // if the item is not in the list, prints `not in list`
    // else {
    //     console.log('not in list');
    // }

}

// nested arrays
// campTrip([['boots', 'tent'], ['fuel'], ['jacket', 'backpack', 'compass']], 'compass'); // INCORRECT OUTPUT - PRINTS 'NOT IN LIST'
// campTrip([['boots', 'tent'], ['fuel'], ['jacket', 'backpack', 'compass']], 'drink'); // INCORRECT OUTPUT - PRINTS 'NOT IN LIST'

campTrip([['boots', 'tent'], ['fuel'], ['jacket', 'backpack', 'compass']], 'fuel'); // incorrect output - not unpacking values from child arrays to check against 'newItem' argument
// campTrip([['boots', 'tent'], ['fuel'], ['jacket', 'backpack', 'compass'], 'fuel'], 'fuel'); // correct output - value in parent array can be checked against 'newItem` argument to meet condition


// campTrip(['boots', 'jacket', 'tent'], 'fuel'); // correct output - not in list
// campTrip(['boots', 'jacket', 'tent'], 'tent'); // correct output - this item is in the list



