const prompt = require("prompt-sync")();
//  1. Start by setting a variable that gets a random value assigned to it. The value 
// is assigned by generating a random number 0-5, for 6 possible results. You 
// can increase this number as you add more results.
let randomNumber = Math.floor(Math.random()*6);
console.log(randomNumber)

//  2. Create a prompt that can get a string value input from a user that you can 
// repeat back in the final output.
let userInput2 = prompt("Enter the value : ")

//  3. Create 6 responses using the switch statement, each assigned to a different 
// value from the random number generator.   
let response;
switch (randomNumber) {
  case 0:
    response = "Yes, definitely!";
    break;
  case 1:
    response = "No, not right now.";
    break;
  case 2:
    response = "It’s possible, but uncertain.";
    break;
  case 3:
    response = "Ask again later.";
    break;
  case 4:
    response = "I wouldn’t count on it.";
    break;
  case 5:
    response = "Absolutely!";
    break;
  default:
    response = "Hmm… I don’t know.";
}


// 4. Create a variable to hold the end response, which should be a sentence 
// printed for the user. You can assign different string values for each case, 
// assigning new values depending on the results from the random value.



//  5. Output the user's original question, plus the randomly selected case 
// response, to the console after the user enters their question
console.log(`You asked: "${userInput2}"`);
console.log(`My answer: ${response}`);