// 1. Create a variable called prize and use a prompt to ask the user to set the 
// value by selecting a number between 0 and 10
const prompt = require('prompt-sync')();
let prize = Number(prompt("Enter the number between 1 and 10 : "))
//  2. Convert the prompt response to a number data type

//  3. Create a variable to use for the output message containing the value "My 
// Selection: "
let message = "My Selection"

//  4. Using the switch statement (and creativity), provide a response back 
// regarding a prize that is awarded depending on what number is selected

//  5. Use the switch break to add combined results for prizes
switch (prize) {
  case 0:
    message += " Oops! No prize for 0.";
    break;
  case 1:
  case 2:
    message += " You won a chocolate bar!";
    break;
  case 3:
  case 4:
    message += " You won a free coffee!";
    break;
  case 5:
  case 6:
    message += " You won a movie ticket!";
    break;
  case 7:
  case 8:
    message += " You won a gift voucher!";
    break;
  case 9:
  case 10:
    message += " Jackpot! You won a laptop!";
    break;
  default:
    message += " Invalid selection. Please choose between 0 and 10.";
}

//  6. Output the message back to the user by concatenating your prize variable 
// strings and the output message string
console.log(message)