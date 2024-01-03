function findElement(arr, func) {
  let num = 8;
  // let num = 7;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(num);
    };
  };
};

// findElement([1, 2], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) // should return 3
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) // should return 'undefined'