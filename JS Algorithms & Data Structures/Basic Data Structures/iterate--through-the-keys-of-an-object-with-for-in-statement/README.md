# fcc challenge
- [iterate through the keys of an object with a for...in statement](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement)

# resources
1. [for in / for of - Beau teaches JavaScript](https://www.youtube.com/watch?v=a3KHBqH7njs)
2. [3 Ways To Access Object Properties in JavaScript](https://dmitripavlutin.com/access-object-properties-javascript/#2-square-brackets-property-accessor)
3. [what does [object Object] mean?](https://stackoverflow.com/questions/4750225/what-does-object-object-mean)
4. [JavaScript Problem: How to Iterate over the Properties of an Object and its Children Objects](https://www.youtube.com/watch?v=-is1De6H1SI)

# challenge code
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
// Only change code below this line

// Only change code above this line
}

console.log(countOnline(users));

# questions
1. how do you check if an object has a specific property?
- a: you can use the 'in' keyword or the 'hasOwnProperty' propery method. 
however, i need to know if a sub object has a specific proprty. Eg:

const users = {
    Alan: {
        online: false
    }
} 

- users is the `parent` object and `alan` is the `child` object aka a property in the `users` object.
- [check if an object has a property](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property)

2. how do i determine if the `child` object has a specific property?

# solutions
a.
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
// Only change code below this line
for (let user in usersObj) {
    return user;
    }
// Only change code above this line
}

console.log(countOnline(users));

# notes
- 150622: watched video in link 4 in the `links` section. looked at hints and solved the challenge. refer to `iterate-through-the-keys-of-an-object-with-a-for---in-statement.txt` file for solution code and explanation. to access the `online` property of the `child` object i needed to call its name. i did not need to work out a way to use the temporary variable used in a for loop to do it. eg: `usersObj[i].online`. [i] is the temporary variable used in the for loop that accesses the child objects in the parent object. `online` is the property in the `child` object. there was no requirement to use another for loop to iterate over and access the property in the `child` object. however, the fcc solution is not universal or generic. ie: if another object was passed to it that contained child objects that used another `property name` to store true/false values (eg: `value: true`), using the property name `online` in the `if` statement would not work.
- 1006022: one of the problems i have is accessing the value of a property in a nested object and then using that value to check if it meets the condition in the `if statement` to then: count each `nested` object that has its `online` property `value` set to `true`. i am halfway through watching the video in `link 4` in the `resources` section. FINISH THE VIDEO and continue working on the code in `challenge.js`.
- 0206022: worked out how to check if a property value is true and return a result (using an if statement) and how to count the number of nested objects (or properties) in a parent object. refer to `ifTrue.js` and `count.js`. refer to `challenge.js` trying to put all the code together. stuck on getting the if statement to work -> to check if the value is `true` then return a result. cannot get it to work within the for loop or outside the for loop. have played around with making the scope of the variables `local` and `global`.
- 310522: worked out how to print the property values from a nested object that is iterated through in a for loop. refer to `example.js`. need to work out how to `check if the property value for a user is TRUE` then `count the number users that have that value`, then finally `return the total number of users with that value`. also refer to `pseudocode.js` file for the `psuedo code`.
- 260522: drafted questions. answered question 1 but i need to answer question 2.
- 250522: solution 1 did not work
- 250522: started