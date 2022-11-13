// uses .endsWith() method

// t = "hello all"
// console.log(t.endsWith("all"));

function ConfirmEnding(str, target) {
    if (str.endsWith(target)) {
        return true;
    } else {
        return false;
    }
}
    
console.log(ConfirmEnding("Bastian", "n")); // true.
console.log(ConfirmEnding("Congratulation", "on")) // should return true.
console.log(ConfirmEnding("Connor", "n")) // should return false.
console.log(ConfirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")) // should return false.
console.log(ConfirmEnding("He has to give me a new name", "name")) // should return true.
console.log(ConfirmEnding("Open sesame", "same")) // should return true.
console.log(ConfirmEnding("Open sesame", "sage")) // should return false.
console.log(ConfirmEnding("Open sesame", "game")) // should return false.
console.log(ConfirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")) // should return false.
console.log(ConfirmEnding("Abstraction", "action")) // should return true.