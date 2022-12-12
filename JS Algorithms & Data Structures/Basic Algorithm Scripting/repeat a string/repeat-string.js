function repeatStringNumTimes(str, num) {
  var checkNum = Number.isInteger(str);
  // var s = "";
  if (num <= 0) {
    return "";
  } else {
      var s = "";
      for (var i = 0; i < num; i +=1) {
        s += str;
    }
  }
  console.log(s);
}
  
console.log(repeatStringNumTimes("*", 3)) // should return the string ***.

// console.log(repeatStringNumTimes("abc", 3)) // should return the string abcabcabc.
// console.log(repeatStringNumTimes("abc", 4)) // should return the string abcabcabcabc.
// console.log(repeatStringNumTimes("abc", 1)) // should return the string abc.
// console.log(repeatStringNumTimes("*", 8)) // should return the string ********. -> HAS CORRECT OUTPUT BUT ALSO OUTPUTS 'UNDEFINED'
// console.log(repeatStringNumTimes("abc", -2)) // should return an empty string ("").
// console.log(repeatStringNumTimes("abc", 0)) // should return "". -> correct output