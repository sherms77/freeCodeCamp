// Hint 1: If everything is lowercase it will be easier to compare. - DONE
// Hint 2: Our strings might be easier to work with if they were arrays of characters. - DONE BUT HOW TO COMPARE IN THIS STATE?
// Hint 3: A loop might help. Use indexOf() to check if the letter of the second word is on the first.

function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split("");
    let arr2 = arr[1].toLowerCase().split("");
    // let k = arr1.length + arr2.length;

    for(let i = 0; i < arr2.length; i++) {
        // console.log(arr1.indexOf(arr2[i]));

        if (arr1.indexOf(arr2[i]) === 0) {
            console.log(false)
            break;
        } 
        
        else if (arr1.indexOf(arr2[i]) === 1) {
            console.log(true)
            break;
        } 
    }
    
    // return arr;

  }

// mutation(["hello", "hey"]) // should return false.
mutation(["hello", "Hello"]) // should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true.
// mutation(["Mary", "Army"]) // should return true.
// mutation(["Mary", "Aarmy"]) // should return true.
// mutation(["Alien", "line"]) // should return true.
// mutation(["floor", "for"]) // should return true.
// mutation(["hello", "neo"]) // should return false.
// mutation(["voodoo", "no"]) // should return false.
// mutation(["ate", "date"]) // should return false.
// mutation(["Tiger", "Zebra"]) // should return false.
// mutation(["Noel", "Ole"]) // should return true. - WHY DOES THIS GIVE ME MULTIPLE OUTPUTS? RETURNS 'TRUE' 3 TIMES