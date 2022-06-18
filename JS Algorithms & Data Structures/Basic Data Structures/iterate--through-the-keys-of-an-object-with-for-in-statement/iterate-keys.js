// solution code

// STEPS
// i need to establish that the 'online' property is 'true' in the child object
// then 'count' how many users have the online property set to true.
// then return the result.

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  for (let user in usersObj) {
    return user;
  }
  // Only change code above this line
}

console.log(countOnline(users));