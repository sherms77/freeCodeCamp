function repeatStringNumTimes(str, num) {
    var s = "";
    for (var i = 0; i < num; i++) {
        s = str + str;
        console.log(s); // this outputs ** twice vertically
    }
    // console.log(s);
}

console.log(repeatStringNumTimes("*", 2))