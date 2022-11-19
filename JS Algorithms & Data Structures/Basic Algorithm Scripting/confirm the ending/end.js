// console.log("hello this is a test");
// console.log("another test");
function confirmEnding(str, target) {
  // let m = target.value(target);
  let r = new RegExp(target, 'i'); // need to make regex to only identify pattern at the end
  // let j = /target/i; // does not work - takes regex literal

  if (r.test(str) == true) {
    return true;
  } else {
    return false;
  }
  
}

console.log(confirmEnding("Connor", "zap")) // false
console.log(confirmEnding("Connor", "R")) // true

// console.log(confirmEnding("Bastian", "n")); // true.
// console.log(confirmEnding("Congratulation", "on")) // should return true.
console.log(confirmEnding("Connor", "n")) // should return false.
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")) // should return false.
// console.log(confirmEnding("He has to give me a new name", "name")) // should return true.
// console.log(confirmEnding("Open sesame", "same")) // should return true.
// console.log(confirmEnding("Open sesame", "sage")) // should return false.
// console.log(confirmEnding("Open sesame", "game")) // should return false.
// console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")) // should return false.
// console.log(confirmEnding("Abstraction", "action")) // should return true.