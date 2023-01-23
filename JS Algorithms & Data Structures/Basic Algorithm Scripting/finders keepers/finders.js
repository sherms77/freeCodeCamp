function findElement(arr, func) {
  console.log(func); // how is the arrow function in "func" taking each element from the array into "num"?
  let num = 0;
  for (num = 0; num < arr.length; num++)
  // return arr[num];
  console.log(arr[num]);
  if (func === true) {
    // return num;
    console.log(num);
  } else {
    // return "undefined";
    console.log("undefined");
  }
}

// this version puts "if" condition in expression 2 of for loop - test
  // function findElement(arr, func) {
  //   let num = 0;
  //   for (let i = 0; if (func === true); i++) {
  //   };
  // }

  // findElement([1, 2, 3, 4]);
  findElement([1, 2, 3, 4], num => num % 2 === 0); // output 4