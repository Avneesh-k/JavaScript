                                                       // Chapter projects

// Evaluating a number game

//  Ask the user to enter a number and check whether it's greater than, equal to, or less 
// than a dynamic number value in your code. Output the result to the user.
const prompt = require('prompt-sync')();
let user = Number(prompt("Enter your number between 1 and 10 : "));
let computer = Math.floor(Math.random()*10);
//console.log(computer)
if(user>computer){
    //console.log("Greater than computer")
}else if(user<computer){
   // console.log("Less than computer")
}else{
    //console.log("Equal to the computer")
}


                                  //Rock Paper Scissors game

// 1. Create an array that contains the variables Rock, Paper, and Scissors.
const arr = ["Rock","Paper","Scissors"]

//  2. Set up a variable that generates a random number 0-2 for the player and then 
// do the same for the computer's selection. The number represents the index 
// values in the array of the 3 items.
let userInput = Math.floor(Math.random()*3);
let computerInput = Math.floor(Math.random()*3);

//  3. Create a variable to hold a response message to the user. This can show the 
// random results for the player and then also the result for the computer of the 
// matching item from the array. 
let message = `Player : ${arr[userInput]} , Computer : ${arr[computerInput]}\n`;

// 4. Create a condition to handle the player and computer selections. If both are 
// the same, this results in a tie. 
if(userInput===computerInput){
    message = "It's a tie"
}
else if (
    (userInput === 0 && computerInput === 2) || // Rock beats Scissors
    (userInput === 1 && computerInput === 0) || // Paper beats Rock
    (userInput === 2 && computerInput === 1)    // Scissors beats Paper
) {
    message += "You win!";
} 
else {
    message += "Computer wins!";
}

// 5. Use conditions to apply the game logic and return the correct results. 
// There are several ways to do this with the condition statements, but you 
// could check which player's index value is bigger and assign the victory 
// accordingly, with the exception of Rock beating Scissors.

//  6. Add a new output message that shows the player selection versus the 
// computer selection and the result of the game.
console.log(message)