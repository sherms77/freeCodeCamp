// arr1 = ["hello"]
// arr2 = ["hey"]
// "hello" does not contain "y" from arr2 should return false

// function mutation(arr) {
//     let arr1 = arr[0].toLowerCase().split("");
//     let arr2 = arr[1].toLowerCase().split("");

//     const hasAllValue = arr1.every(element => {
 
//         if (arr2.includes(element)) {
//             console.log(true);
            
//         } else {
//             console.log(false);
//         }
//     }) 
// }

function mutation(arr) {
    // let test = arr[0].toLowerCase();
    // let target = arr[1].toLowerCase();
    let test = arr[0].toLowerCase().split('').sort().join('');
    let target = arr[1].toLowerCase().split('').sort().join('');
    // let sortStr = lower.split("").sort().join(""); // sorts characters in each string
    
    for (let i = 0; i < test.length; i++) {
      
      if (target.indexOf(test[i]) === -1) {
        return false;
        // console.log(false);
      }   
      
      // else if (target.indexOf(test[i]) === 1) {
      //   // return false;
      //   console.log(true);
      // } 
      
    }

    // console.log(true);
    return true;

  }

  // console.log(false);

  
mutation(["hello", "hey"]) // should return false.
// mutation(["hello", "Hello"]) // should return true.
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