var s = "hello";
for (let i = 0; i < 5; i++) {
    // console.log("Hello");
    s += i + " "; // does not work -> prints "hello" on multiple lines and also prints numbers 1-4 in iterations on each line
    console.log(s); 

}