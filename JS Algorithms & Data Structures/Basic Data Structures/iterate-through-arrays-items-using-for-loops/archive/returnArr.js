// return an element from an array

// const carArr = ['corolla', 'i30', 'falcon', 'calais'];
// console.log(carArr[2]);

// 080422: method to try -> save results in variables and then use them to set and test the condition

function carArray (array, carItem) {
    for (let i = 0; i <= array.length; i++) {
        let arrItem = array.indexOf([i]);
        console.log(arrItem);
        // if (array.indexOf([i]) === carItem) // does not work
        if (array[i] === carItem) {
            return array.indexOf([i]);
        } 
    } 
}

console.log(carArray(['toyota', 'bmw', 'hyundai', 'kia', 'ford'], 'ford'));