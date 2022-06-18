// example code from challenge
// the example does not output the values of newArr?
// 140422: posted in amigos code fb group for guidance

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr; // no output?
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1])); // added this - it prints array in console.log statement and does not return newArr from the function