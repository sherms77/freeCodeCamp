let person = {fname:"Beau", lname:"Carnes", arms:2}; 

let text = "";
for (let x in person) {
  text += person[x];
//   text = person[x];
  // console.log(x);
};
console.log(text);
