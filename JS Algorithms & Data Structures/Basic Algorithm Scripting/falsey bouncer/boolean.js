// convert a value to a boolean
// bouncer([7, "ate", "", false, 9]) // should return [7, "ate", 9].

function bool_test(test_bool) {
    // const result = !!test_bool;
    let newArr = [];

    // console.log(result);
    // console.log(!!.test_bool);

    // checks if truthy or falsy
    if (!test_bool !== true) {
        newArr.push(test_bool);
    } 

    console.log(newArr);
}

bool_test(false); // false
// bool_test(""); // false
bool_test(7); // true
// bool_test("ate"); // true
// bool_test(9); // true

// bool_test([7, false, "ate"]);