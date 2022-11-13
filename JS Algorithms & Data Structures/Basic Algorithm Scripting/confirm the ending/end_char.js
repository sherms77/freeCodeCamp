// test .charAt method in function

function char (str, target) {
    let x = str.length;
    let y = target.length;
    
    console.log("length of str arg is", x);
    console.log("length of target arg is", y);
// console.log(str.charAt(x-y)); // subtracting target from str takes you to the incorrect index in str. need to work out how to get to the correct index in str to match the target. it might require adding another number to equation to calculate the right index no.

}

// console.log(char("Bastian")); // test length in function -> works

// console.log(char("Bastian", "n")); // n
console.log(char("Congratulation", "on")) // on
// console.log(char("He has to give me a new name", "name")) // name
// console.log(char("Walking on water and developing software from a specification are easy if both are frozen", "specification")) // should return false.
// console.log(char("He has to give me a new name", "name")) // should return true.