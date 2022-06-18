// code for fcc challenge
// copy array items using slice

let theForecast = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
console.log('array to be sliced: ' + theForecast);

function forecast(arr) {
    // Only change code below this line
    // arr.slice(2, 4);
    // arr.slice(1, 4);
    // arr.slice(4, 5);
    // console.log('The function should return the sliced array.');
    return arr.slice(2,4 ); // does not return sliced array?
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

  // let slicedForecast = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];
  // console.log(forecast(slicedForecast));
  // console.log(forecast()); // does not call functtion
  // console.log(forecast); // does not call function