function findElement(arr, func) {
  let num = 2;
  // let num = 7;
  let i = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(num);
    }
    else {
      console.log("undefined");
    };
  };
};

findElement([1, 2], num => num % 2 === 0);