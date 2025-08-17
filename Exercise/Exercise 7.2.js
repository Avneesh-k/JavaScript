//  1. Using the Person class from Practice exercise 7.1, add a method called 
// fullname, which returns the concatenated value of firstname and lastname 
// when invoked.
//  2. Create values for person1 and person2 using two friends' first and last names.
//  3. Using the fullname method within the class, return the full name of one or 
// both people.

class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    };
    fullname() {
        return `Welcome , ${this.firstname} ${this.lastname}`
    }
}

let Person1 = new Person("Avneesh","Kumar")
let Person2 = new Person("Monty","Sharma") 

console.log(Person1.fullname());
console.log(Person2.fullname());
