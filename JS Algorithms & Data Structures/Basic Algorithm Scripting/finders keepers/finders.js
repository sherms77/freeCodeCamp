function findElement(arr, func) {
    let num = 0;
    // use for loop to traverse array
    for (let i = 0; i < arr.length; i++) {
      // put condition in loop to break and return num if it passes truth test -> in case below, if num % 2 === 0
      // return arr;
      // console.log(arr[i]);
      if (func === true) {
        return num;
      } else {
        // if no element passes the test return "undefined"
      }
    };
  
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);