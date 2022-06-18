// nested objects
const users = {
    Alan: {
        online: true, 
        // surname: "jones"
    },
    Jeff: {
        online: false,
        // surname: "connor"
    },
    Sarah: {
        online: false,
        // surname: "kelly"
    }
}

// flat object -> does not contain nested objects
// const users = {
//     first: "sherman",
//     second: "bernard",
//     online: true
// };

// console.log(users.Alan.surname); // outputs relevant property
// console.log(users.Alan['online']); // outputs relevant property
// console.log(users.Alan['surname']); // outputs relevant property

// got this code from fcc video -> modified it to iterate through properties in the nested objects and output the values
let p = "";
for (let user in users) {
    // p += users[user]; // this does not work for nested objects -> outputs [object Object][object Object][object Object] - refer to resources link for more info
    // console.log(users[user]); // outputs property values
    p = users[user];
    // console.log(p);

    if (p === true) {
        console.log(p);
    }
}

// console.log(p);