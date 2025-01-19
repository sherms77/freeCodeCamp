function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split("");
    let arr2 = arr[1].toLowerCase().split("");

    arr1.forEach((arr1) => {
        console.log(arr1)
    })

  }

// mutation(["hello", "hey"]) // should return false.
// mutation(["hello", "Hello"]) // should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true.
// mutation(["Mary", "Army"]) // should return true.
mutation(["Mary", "Aarmy"]) // should return true.
// mutation(["Alien", "line"]) // should return true.
// mutation(["floor", "for"]) // should return true.
// mutation(["hello", "neo"]) // should return false.
// mutation(["voodoo", "no"]) // should return false.
// mutation(["ate", "date"]) // should return false.
// mutation(["Tiger", "Zebra"]) // should return false.
// mutation(["Noel", "Ole"]) // should return true. - WHY DOES THIS GIVE ME MULTIPLE OUTPUTS? RETURNS 'TRUE' 3 TIMES