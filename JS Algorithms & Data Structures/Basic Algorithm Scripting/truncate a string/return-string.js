// return a string if the length of 'str' is < 'num'
function returnString(str, num) {
    // var strLength = str.length; // don't need this variable
    // if condition to return false if string is too long
    // if (strLength > num) { 
    if (str.length > num) {
        return false;
    }
    
    // else condition to return string if above condition is 'not' true 
    else {
        return str;
    }
  }

console.log(returnString("Hi there how are you", 5));
console.log(returnString("Hi", 5));