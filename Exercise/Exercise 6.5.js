//  1. Create a variable value with let and assign a string value of 1000 to it.
//  2. Create an IIFE function and within this function scope assign a new value to 
// a variable of the same name. Within the function, print the local value to the 
// console.
//  3. Create an IIFE expression, assigning it to a new result variable, and assign 
// a new value to a variable of the same name within this scope. Return this 
// local value to the result variable and invoke the function. Print the result 
// variable, along with the variable name you've been using: what value does it 
// contain now?
//  4. Lastly, create an anonymous function that has a parameter. Add logic that 
// will assign a passed-in value to the same variable name as the other steps, 
// and print it as part of a string sentence. Invoke the function and pass in your 
// desired value within the rounded brackets.

let value = "1000";
(function (){
    let value = "3000";
    console.log(value)
})();

let result = (function (){
    let value = "Returned local value";
    return value
})();

console.log(value);
console.log(result);

(function (newValue) {
    value = newValue; // assigns to global value
    console.log(`In anonymous function: The value is now '${value}'`);
})("Updated by Anonymous Function");