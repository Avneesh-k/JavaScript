//  1. Create a prompt to ask the user's age
const prompt = require("prompt-sync")();

let ageInput1 = prompt("Please enter your age: ");
console.log(`You entered: ${ageInput1}`);
console.log(typeof ageInput1)

//  2. Convert the response from the prompt to a number
let ageInput2 = Number(prompt("Please enter your age: "));
console.log(`You entered: ${ageInput2}`);
console.log(typeof ageInput2)

//  3. Declare a message variable that you will use to hold the console message for 
// the user
let message;

//  4. If the input age is equal to or greater than 21, set the message variable to 
// confirm entry to a venue and the ability to purchase alcohol
if(ageInput2 >=21){
   message = "confirm entry to a venue and the ability to purchase alcohol";
}
//  5. If the input age is equal to or greater than 19, set the message variable to 
// confirm entry to the venue but deny the purchase of alcohol
else if(ageInput2>=19){
    message = "confirm entry to the venue but deny the purchase of alcohol";
}
//  6. Provide a default else statement to set the message variable to deny entry if 
// none are true
else{
    message = "Deny entry"
}
//  7. Output the response message variable to the console
console.log(message)