//  1. Create an array of descriptive words.
//  2. Create a function that contains a prompt asking the user for a name.
//  3. Select a random value from the array using Math.random.
//  4. Output into the console the prompt value and the randomly selected array 
// value.
//  5. Invoke the function.
const prompt = require('prompt-sync')();

const arr = ["smart", "brave", "kind", "funny", "creative"]
function printValue(){
    let name = prompt("Enter your name : ")
    let randomval = Math.floor(Math.random()*arr.length)
    console.log(name,"is",arr[randomval])
}

printValue()