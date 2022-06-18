// code from fcc challenge

function copyMachine(arr, num) { // function takse two arguments - 1.arr and 2.num
  let newArr = []; // initializes an empty array -> this is the new array
  while (num >= 1) { // condition for while loop -> while num is greater than or = to 1
    
    // Only change code below this line
    newArr.push([...arr]); // makes copy of arr and adds it to newArr
    // Only change code above this line
    
    num--; // decrements num to turn off while loop - ie: when num is equal to 1 -> stop
  }
  return newArr; // returns newArr
}

console.log(copyMachine([true, false, true], 2));