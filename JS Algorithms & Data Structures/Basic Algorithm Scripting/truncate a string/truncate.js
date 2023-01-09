function truncateString(str, num) {
  if (str.length > num) {
    // return str.length - num + '...' - psuedo code
    return str.length-num + '...'; // returns str as the number of characters
    // return "string is too long"; // need to change this condition to show '...' at the end of the string if it's too long
  } else {
    return str;
  }
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)) // should return the string A-tisket....
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)) // should return the string Peter Piper....
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)) // should return the string A-tisket a-tasket A green and yellow basket.
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) // should return the string A-tisket a-tasket A green and yellow basket.
// truncateString("A-", 1) // should return the string A....
// truncateString("Absolutely Longer", 2) // should return the string Ab....