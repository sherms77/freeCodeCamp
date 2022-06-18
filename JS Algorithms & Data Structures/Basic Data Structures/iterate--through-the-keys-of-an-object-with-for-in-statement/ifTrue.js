// check if condition is true

const users = {
    Alan: {
        // online: true
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

// console.log(users['Alan']); // returns the property and its value
// console.log(users.Alan); // returns the property and the value in the property
// console.log(users.Alan.online); // only returns the value from the property
// console.log(users[Alan]); // gives error - Alan is not defined

if (users.Alan.online === true) {
    console.log('correct value');
} else {
    console.log('incorrect value');
}