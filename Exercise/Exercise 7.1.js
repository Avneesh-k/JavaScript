//  1. Create a class for Person including the constructor for firstname and 
// lastname.
//  2. Create a variable and assign a value of the new Person object using your 
// friend's first and last names.
//  3. Now add a second variable with another friend's name using their first name 
// and last name.
//  4. Output both friends into the console with a greeting of hello.

class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return `Hello, ${this.firstname} ${this.lastname}`;
    }
}

let friend1 = new Person("Avneesh","Kumar")
let friend2 = new Person("Monty","Sharma")

console.log(friend1.greet());
console.log(friend2.greet());
