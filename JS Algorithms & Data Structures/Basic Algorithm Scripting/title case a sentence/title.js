// need to convert input string to lower case first.

function titleCase(str) {
    const lower = str.toLowerCase();
    const w = lower.split(" ");

    for (let i = 0; i < w.length; i++) {
        w[i] = w[i][0].toUpperCase() + w[i].substring(1);
    }

    console.log(w.join(" "));
    // return str;
}

// tests
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

// code in fcc editor
// function titleCase(str) {
//     const w = str.split(" ");

//     for (let i = 0; i < w.length; i++) {
//         w[i] = w[i][0].toUpperCase() + w[i].substring(1);
//     }

//     return w.join(" ");
// }

