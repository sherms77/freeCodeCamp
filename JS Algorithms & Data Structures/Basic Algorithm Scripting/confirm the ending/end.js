function confirmEnding(str, target) {
  let pattern = /\w+$/i;
  let result = pattern.test(str);
  if (e == target) {
    return true;
  } else {
    return false;
  }
    // return str;
  }
  
  // console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Bastian", "p"));
  confirmEnding("He has to give me a new name", "name") // needs to identify target string regardless of length -> multi-charcter string