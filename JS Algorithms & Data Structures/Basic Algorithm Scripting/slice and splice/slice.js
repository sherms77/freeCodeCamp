function frankenSplice(arr1, arr2, n) {
  let copyArr2 = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  }

  copyArr2.splice(n,0, ...arr1);
  console.log(copyArr2);
  // return(copyArr2);
}
  
// frankenSplice([1, 2, 3], [4, 5, 6], 1);

  // tests
frankenSplice([1, 2, 3], [4, 5], 1) // should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) // should return ["a", 1, 2, "b"].

// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]. 
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) 

// All elements from the first array should be added to the second array in their original order. 
frankenSplice([1, 2, 3, 4], [], 0) // should return [1, 2, 3, 4].

// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.