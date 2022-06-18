
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    },

    David: {
        online: false
    }
}

let count = 0
for (let i in users) {
    count += 1;
}

console.log(count);