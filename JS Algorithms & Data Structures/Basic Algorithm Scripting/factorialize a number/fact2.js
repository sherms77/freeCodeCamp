// solution 1 from challenge solutions
// uses a for loop - similar to what i was trying
// wanted to see how it worked

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    // return product; // return statement does not work in node js
    console.log(product); 
  }
  
  factorialize(5);