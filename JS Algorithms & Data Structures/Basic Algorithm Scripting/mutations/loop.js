let arr = ["hello", "there"];
let new_arr = [];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    new_arr.push(arr[i].split("")); // nests elements in arrays in `new_arr`.
}

console.log(new_arr);