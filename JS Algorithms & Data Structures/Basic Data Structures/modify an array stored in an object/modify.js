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
  
// user.data.friends.push('Pete');
// console.log(user['data'].friends);

function addFriend(userObj, friend) {
    // Only change code below this line
    
    // this code works
    // let newFriend = userObj['data'].friends;
    // newFriend.push(friend);
    // return newFriend;


    // this code works too - used in solution
    // less lines of code
    userObj['data'].friends.push(friend);
    return userObj['data'].friends;

    // Only change code above this line
  }
  
console.log(addFriend(user, 'Pete'));
  