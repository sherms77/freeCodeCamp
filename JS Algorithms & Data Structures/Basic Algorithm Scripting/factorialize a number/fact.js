// Example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
  for(let i = 1; i <= num; i++) {
    // f = i * i;
    // console.log(i);
    let count = i + 1;
    // console.log('output of count:', count);
    f = i * count;
    j = f * i;
    // console.log('f equals:', f);
  }
  // return num;
  // return f;
  // console.log(f);
  console.log(j);
}

factorialize(5);