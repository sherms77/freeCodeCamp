// iterate over an array and show the value of each item
// this loop is not in a function

// will output values from array
let campItems = ['tent', 'boots', 'backpack', 'water bottle'];
for (let i = 0; i < campItems.length; i++) {
    console.log(campItems[i]);
}

// this works but it prints undefined as the last item? 
// fixed above problem by making i < campItems.length NOT i <= campItems.length
// i think the above was resolved because the indexing starts at 0 so it was trying to find a fifth value by making it <= campItems.length?