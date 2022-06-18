function reverseString(str) {
    let backwards = [...str].reverse().join(""); // seperates the string into individual items
    console.log(backwards); // outputs the array
  }

  reverseString("hello");