const users = {
    Alan: {
        online: false,
        // surname: 'davis'
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

console.log(users['Alan'].online); // you can use bracket and dot notation to access the value of an objects property
console.log(users['Alan']['online']);
console.log(users.Alan.online);

function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let i in usersObj) {
        if (usersObj[i].online === true) {
            count += 1;
        }
    }
     
    console.log(count); 
}

    // for (let i in usersObj) {
    //     // console.log(i, usersObj[i]); // outputs the object, property and its value
    //     // console.log(usersObj[i]); // outputs the property and its value
    //     // console.log(usersObj.i); // returns undefined - iterator needs to be in []
        
    //     if (i, usersObj[i] === true) {
    //         console.log('the value of the online property is TRUE');
    //     } else {
    //         console.log('false, the value of the online property is false!');
    //     }

    // }
    
    // // Only change code above this line
    // }
    
    console.log(countOnline(users));