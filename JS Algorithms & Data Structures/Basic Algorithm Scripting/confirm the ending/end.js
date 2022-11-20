function confirmEnding(str, target) {
  var funcTarget = target + '$'; // concatenates $ to the end of the target string to use in the regex to find the pattern at the end of the string
  let r = new RegExp(funcTarget, 'i'); // passes funcTarget to new RegExp method
  return r.test(str); // returns test result
}

console.log(confirmEnding("Connor", "zap")) // false
console.log(confirmEnding("Connor", "R")) // true
console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Congratulation", "on")) // true
console.log(confirmEnding("Connor", "n")) // false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")) // false
console.log(confirmEnding("He has to give me a new name", "name")) // true
console.log(confirmEnding("Open sesame", "same")) // true
console.log(confirmEnding("Open sesame", "sage")) // false
console.log(confirmEnding("Open sesame", "game")) // false
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")) // false
console.log(confirmEnding("Abstraction", "action")) // true