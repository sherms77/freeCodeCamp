// uses .endsWith() method

t = "hello all"
console.log(t.endsWith("all"));

function confirmEnding(str, target) {
    if (str.endsWith(target)) {
        return true;
    } else {
        return false;
    }
}
    
// console.log(confirmEnding("Bastian", "n")); // true
// console.log(confirmEnding("Bastian", "p")); // true
console.log(confirmEnding("He has to give me a new name", "name")) // true -> prints true twice?