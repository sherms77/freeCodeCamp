/*
// loops array - step 1
for(i = 0; i < contacts.length; i++) { 
    console.log(contacts[i]); // prints each element
    console.log(contacts[i]['firstName']); // prints firstName property from each nested object
}
*/

/*
let a = contacts[0]['firstName']; // stores firstName property
let b = contacts[0]['lastName']; // stores secondName property
console.log(a + ' ' + b); // prints two object properties in one line.
*/

// console.log(contacts[1]['firstName']); - step 2

/*
// step 3
let n = 'Akira'
if(n == contacts[0]['firstName']) { // if n matches value in property in first name print the first name to the console.
  console.log(contacts[0]['firstName']); // prints value in 'firstName' to console if above condition is met.
}
*/

/*
let n = 'David'
if(n == contacts[0]['firstName']) {
  console.log(contacts[0]['firstName']);
} else {
  console.log('Name does not exist.'); // prints statement if above condition is false.
}
*/

/*
// step 3 in a function that takes name paramater, loops over array and returns firstName.
function checkFirstName(name) {
  for(i = 0; i < contacts.length; i++) {

    if(name == contacts[i]['firstName']) {
      console.log(contacts[i]['firstName']);
    } 

  } 
}

checkFirstName('Akira')
// checkFirstName('Sherlock')
// checkFirstName('John')
*/


// console.log(contacts[0].hasOwnProperty('firstName')); // rule 4


/*
// rule 5 - loops array, checks if prop exists and prints prop.
function checkProp(propName) {
  for(i = 0; i < contacts.length; i++) {
    if(contacts[i].hasOwnProperty('firstName') == true) {
      console.log(contacts[i][propName]);
    }

  }
}
checkProp('likes');
checkProp('number');
*/
