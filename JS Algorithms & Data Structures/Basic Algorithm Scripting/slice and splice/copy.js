// copy elements from one array to another

// concat() method
// syntax: array1.concat(array2, array3, ..., arrayX)
// let newArr = origArr.concat(arrAdd);
// console.log(newArr);

// splice method
// array.splice(index, amount, item1, ....., itemX)
// origArr.splice(1, arrAdd);

let origArr = ['a', 'b', 'c'];
// let arrAdd = ['new element'];

origArr.splice(1,0, 'NEW');
console.log("updated origArr: " + origArr);
 


