// Stack Memory
// Stores primitive values (number, string, boolean, null, undefined, symbol, bigint).

// Stack Example 
let x = 10;
let y = x; //copies the value of x.

y = 20;  //change the value of y does not affect the value of the x.

console.log(x);  //10
console.log(y);  //20 


// Heap Memory
// Stores objects (including arrays, functions).

// Heap Example 
let user1 = {   //reference in stack -> actual object in heap.
    name:"Avneesh Kumar",
    email:"xyz@gmail.com"
}

let user2 = user1; //user2 gets the same reference (not a copy)

user2.email = "abc@gmail.com"; //Change the object.

console.log(user1);  // { name: 'Avneesh Kumar', email: 'abc@gmail.com' }
console.log(user2);  // { name: 'Avneesh Kumar', email: 'abc@gmail.com' }