function bouncer(arr) {
    let copyArr = arr.slice();// copies the array
    // let newArr [];
    // console.log(copyArr);

    // iterates array
    for(let i = 0; i < copyArr.length; i++) {
        // console.log(copyArr[i]);
        
        // console.log(!!copyArr[i]);
        let result = !!copyArr[i]; // converts to boolean values
        
        // HOW DO I CONVERT IT BACK TO NON BOOLEAN VALUES? THEN
        // STORE THE TRUE ONES IN A NEW ARRAY? AND THEN 
        // RETURN THE ARRAY WITH THE "TRUE" VALUES ONLY?
        
        let newArr = [];
        if (result === true) {
            newArr.push(result);
        }

    console.log(newArr);
    
    }


    // finds false values

    // puts true values into new array

    // return arr;
  }
  
bouncer([7, "ate", "", false, 9]);

// tests
// bouncer([7, "ate", "", false, 9]) // should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) // should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) // should return [].
// bouncer([null, NaN, 1, 2, undefined]) // should return [1, 2].
// You should not mutate arr.