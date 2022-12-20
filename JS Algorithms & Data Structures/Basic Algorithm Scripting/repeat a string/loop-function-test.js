function repeatStringNumTimes(str, num) {
    var s = "";
    for (var i = 1; i <= num; i += 1) {
        // s = str + str; // not appending?
        s += str;
        // console.log(s); // this outputs ** twice vertically
    }
    console.log(s);
}

console.log(repeatStringNumTimes("*", 7))