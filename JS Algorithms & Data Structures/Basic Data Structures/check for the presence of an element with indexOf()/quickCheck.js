// code from fcc challenge

function quickCheck(arr, elem) {
  // Only change code below this line
  let elemCheck = arr.indexOf(elem);
  console.log(elemCheck); // outputs index position of element in array or -1 if it is not in the array
  
  if (elemCheck >= 0) { 
    return true;
  } else {
    return false;
  }
  // Only change code below this line
}

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // should return  false
console.log(quickCheck(["onions", "squash", "shallots"], "onions")); // should return true - actually returns false
// console.log(quickCheck([3, 5, 9, 125, 45, 2], 125)); // should return true
 