# fcc challenge
- [modify an array stored in an object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object)

# challenge
Finish writing the function so that it takes a `user` object adds the name of the `friend` argument stored in the `user.data.friends` and `returns` that `array`.

# steps
1. Get to the `array` named `friends` nested in the `child` object named `data`.
2. add the `string` from the `friend` argument passed to the function.

ACCESS FLOW: user(`parent object`) -> data(`child object -> also property of parent object`) -> friends.push('friend')(`property/key`, which is an array, nested in the child object).

# challenge code
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));

# solutions
- 160622: refer to `modify.js` for solutions.

# notes
- 160622: solved challenge. refer to `modify-an-array-stored-in-an-object.txt` for final solution.
- 160622: sketched out steps.
- 160622: started
