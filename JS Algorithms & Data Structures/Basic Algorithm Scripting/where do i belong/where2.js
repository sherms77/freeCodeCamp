function getIndexToIns(arr, num) {

     // adds new element
     arr.push(num);
    //  console.log(arr);

    // sorts array
    arr.sort((a, b) => a - b);
    // console.log("sorted array:", arr);
 
    // check if the element is bigger than 'num'
    for(let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (arr[i] >= num) {
        console.log(arr.indexOf(val));
        break;
      }
    
      // 180324: INCORRECT OUTPUT BECAUSE NEW ELEMENT IS NOT ADDED AND CANNOT RETURN INDEX OF WHERE IT SHOULD BE??
      else if (arr[i] <= num) {
        console.log(arr.indexOf(val)); 
        // break;
      }

    }
  }

getIndexToIns([10, 20, 30, 40, 50], 35)  // should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 35)  // should return a number.

// getIndexToIns([2, 5, 10], 15)  // should return 3.
// getIndexToIns([2, 5, 10], 15)  // should return a number.