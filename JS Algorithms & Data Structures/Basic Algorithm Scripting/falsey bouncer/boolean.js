// convert a value to a boolean
// bouncer([7, "ate", "", false, 9]) // should return [7, "ate", 9].

const newArr = [];
function bool_test(test_bool) {
    // const result = !!test_bool;
    // const newArr = [];
    if (newArr.length > 0) {
        if (!test_bool !== true) {
            newArr.push(test_bool);
        }
    }

    console.log(newArr);
}

bool_test(false); // false
// bool_test(""); // false
bool_test(7); // true
bool_test("ate"); // true
// bool_test(9); // true

// bool_test([7, false, "ate"]);