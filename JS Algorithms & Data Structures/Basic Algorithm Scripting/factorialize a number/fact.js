// Example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120

function factorialize(num) {
  for(let i = 1; i <= num; i++) {
    //  console.log(i * i);
    let d = num - i; // this does not work
    // console.log(d);
    let p = i * d;
    console.log(p);
  }
} 

factorialize(5);