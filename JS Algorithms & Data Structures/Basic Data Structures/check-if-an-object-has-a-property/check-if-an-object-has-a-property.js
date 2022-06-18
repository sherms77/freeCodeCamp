// fcc challenge
// - (Check if an Object has a Property)[https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property]

// notes
// 210522: solved problem. inverted if and if else statements to state if condition is false return false else return true. refer to check-if-an-object-has-a-property.txt for solution.
// 210522: sixth set of test code did not work. tried to do chain of if else statements and tried to add an else if for the alternative condition - eg: else if alan in userObj == false return false. this did not work.
// 210522: the fifth set of code passes all the tests except for test 3: "The function isEveryoneHere should return true if Alan, Jeff, Sarah, and Ryan are properties on the object passed to it."
// 200522: fourth set of test code started to work but I changed it and lost correct result. kept last version i was playing with. tried to invert the conditions. ie: if its FALSE return FALSE.
// 200522: conditions in third set of test code work correctly. but need to test with both conditions in the fucntion at the same time.
// 190522: worked on - cannot run node.js file for some reason? says it can't find it?
// - else statement does not work - its ignored? tried the following which did not work also:
	// - inverting if else starements. Ie: made condition if != condition, return false else true
	// - else if statement with condition != condition, return false
// - 160522: started

// challenge
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// 190522: first set of test code -> did not work -> only returns false
// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   // if (userObj == 'Alan'|| 'Jeff' || 'Sarah' || 'Ryan')
//   if (userObj == 'Alan') { 
//     return true;
//   } else {
//     return false;
//   };
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));

// // 200522: second set of test code -> did not work
// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   if ('Alan' in userObj) {
//     return true;
//   } else if ('Jeff' in userObj) {
//     return true;
//   } else if ('Sarah' in userObj) {
//     return true;
//   } else if ('Ryan' in userObj) {
//     return true;
//   } else {
//     return false;
//   };
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));


// 200522: third set of test code
function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // if ('Alan' in userObj) {
  //   return true;
  // } 
  
  if ('David' in userObj) {
    return true;
  } else {
    return false;
  };
  // Only change code above this line
}

console.log(isEveryoneHere(users));

// 200522: fourth set of test code
function isEveryoneHere(userObj) {
  // Only change code below this line
  if ('Alan' in userObj == false) {
    return false;
  } else if ()
  // Only change code above this line
}

console.log(isEveryoneHere(users));

// 210522: fifth set of test code
function isEveryoneHere(userObj) {
  // Only change code below this line
  if (userObj.hasOwnProperty(userObj) == true) {
    return true;
  } else {
    return false;
  };
  
  // Only change code above this line
}

// 210522: sixth set of test code
function isEveryoneHere(userObj) {
  // Only change code below this line
  if ('Alan' in userObj == true) {
    return true;
  } else if ('Jeff' in userObj == true) {
    return true;
  } else if ('Sarah' in userObj == true) {
    return true;
  } else if ('Ryan' in userObj == true) {
    return true;
  } else if ('Alan' in userObj == false) {
    return false;
  }
  // is alan in the object?
    // if yes -> return true
    // if no -> return false
  // is jeff in the the object?
    // if yes -> return true
    // if no -> return false
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));
