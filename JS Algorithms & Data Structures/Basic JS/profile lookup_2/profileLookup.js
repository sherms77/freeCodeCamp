// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

// ORIGINAL CODE FROM CHALLENGE
function lookUpProfile(name, prop) {
  
  for(let i = 0; i < contacts.length; i++) {
    
    // rule 1
    if(name == contacts[i]['firstName'] && contacts[i].hasOwnProperty(prop) == true) { // if name == firstName in object and prop is in object, return prop.
      console.log(contacts[i][prop]); // return statement used instead of console.log in coding challenge
      
    } 

    // rule 3
    else if(name == contacts[i]['firstName'] && contacts[i].hasOwnProperty(prop) == false) { // if name == firstName in object and prop is not in object, return No such property.
      console.log('No such property'); // return statement used instead of console.log in coding challenge
      
    } 
  
  } 
  
  // rule 2
  return 'No such contact'; // this works in freeCodeCamp editor for rule 2. Unsure how to get it to work in real world.
  // 

}

lookUpProfile("Akira", "likes"); // rule 1 - output: print prop 'likes'
// lookUpProfile("David", "likes"); // rule 2 - output: No such name
// lookUpProfile("Harry", "music") // rule 3 - output: No such property