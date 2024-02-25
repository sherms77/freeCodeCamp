// let person = new Person ('bob');

class Person {
    // let person = new Person ('bob');
    constructor(name) {
        this.name = name;
    }

    printNameFunction() {
        // let person = new Person ('bob');
        setTimeout(function() {
            // let person = new Person ('bob');
            console.log('Function:' + this.name);
        }, 100)

    }
}

let person = new Person ('bob');
person.printNameFunction();


    

