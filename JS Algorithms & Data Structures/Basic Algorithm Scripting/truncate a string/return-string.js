// return a string if the length of 'str' is < 'num'
function returnString(str, num) {
   // if length of `str` > 'num` return `string is too long`
    if (str.length > num) {
        return "string is too long";
    }
    
    // else return string if above condition is 'not' true 
    else {
        return str;
    }
  }

console.log(returnString("Hi there how are you", 5));
console.log(returnString("Hi", 5));