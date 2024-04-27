// Hint 1: If everything is lowercase it will be easier to compare. - DONE
// Hint 2: Our strings might be easier to work with if they were arrays of characters. - DONE BUT HOW TO COMPARE IN THIS STATE?
// Hint 3: A loop might help. Use indexOf() to check if the letter of the second word is on the first.

function mutation(arr) {
    // console.log("original array:", arr);
    // console.log(arr[0].toLowerCase().split(""));
    let arr1 = arr[0].toLowerCase().split("");
    let arr2 = arr[1].toLowerCase().split("");

    // console.log(arr1);
    // console.log(arr2);

    // arr.length is the probelm. 
    // it won't loop over the full length of arr1 and arr2 as there are only 2 elements in arr
    // used length of arr2 to loop over elements in both arrays. 
    // does not work in case where arr1 is shorter when applyting the 'if' statement.
    for(let i = 0; i < arr2.length; i++) {
        // console.log(arr1[i]);
        // console.log(arr2[i]);
        console.log(arr1[i].indexOf(arr2[i])); 

        if (arr1[i].indexOf(arr2[i]) >= 0) {
            console.log(true);
        };
        
    }
    
    // console.log(j);
    // return arr;

  }


// mutation(["floor", "for"]) // should return true.
mutation(["ate", "date"]) // should return false. letters in first element does NOT contain ALL letters in second element
// mutation(["Noel", "Ole"]) // should return true. - DOES NOT WORK??