// let person = new Person ('bob');

class Person {
// let person = new Person ('bob');
    constructor(name) {
    this.name = name;
}

// let person = new Person ('bob');

printNameFunction() {
        setTimeout(function() {
            console.log('Function:', this.name);
        }, 100)
    }
}

// let person = new Person ('bob');
person.printNameFunction();


    

