// why is it only adding one element at a time?
// issue with my logic?

let n = []; // set blank array outside of function so it appends elements - global variable
// only taking one argument in function param
// if you put params in an array in the function call it will push both elements to the new array but its "nested"
function add_arr(new_elements) {
    // n = [];
    n.push(new_elements);
    console.log(n);
}

// add_arr(1,3);
add_arr([4,5]);
add_arr(["apple", "lemon"]);
add_arr(["pizza"]);

// add_arr([5,6]);
// add_arr(["element"]);

// x = [7,8];
// x.push("lemon", "pie");
// console.log(x);