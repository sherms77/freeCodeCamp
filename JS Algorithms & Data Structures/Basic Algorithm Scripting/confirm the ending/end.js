function confirmEnding(str, target) {
  let e = str.charAt(str.length-1); // need to match ending characters from str with target -> should I use a regex?
  // console.log(e);
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