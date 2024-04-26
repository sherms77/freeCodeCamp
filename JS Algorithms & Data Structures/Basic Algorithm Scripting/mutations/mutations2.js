// Hint 1: If everything is lowercase it will be easier to compare.
// Hint 2: Our strings might be easier to work with if they were arrays of characters.
// Hint 3: A loop might help. Use indexOf() to check if the letter of the second word is on the first.

function mutation(arr) {
    // console.log("original array:", arr);
    let s = arr.split("");
    console.log(s);

    for(let i = 0; i < arr.length; i++) {
        // let lower = arr[i].toLowerCase(); // convert characters in each element to lower case
        console.log(arr[i].split)
        // console.log(arr[i].indexOf(arr[i]));
    }
    // return arr;
  }


// mutation(["floor", "for"]) // should return true.
// mutation(["ate", "date"]) // should return false.
mutation(["Noel", "Ole"]) // should return true. - DOES NOT WORK??