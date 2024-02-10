// convert a value to a boolean
// bouncer([7, "ate", "", false, 9]) // should return [7, "ate", 9].

function bool_test(test_bool) {
    const result = !!test_bool;
    console.log(result);
    // console.log(!!.test_bool);
}

bool_test(false); // false
bool_test(""); // false
bool_test(7); // true
bool_test("ate"); // true
bool_test(9); // true

