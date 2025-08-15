// 1. Set the start variable at a value of 10, which will be used as the starting 
// value for the loop.
//  2. Create a function that takes one argument, which is the countdown value.
//  3. Within the function, output the current value of the countdown into the 
// console.
//  4. Add a condition to check if the value is less than 1; if it is, then return the 
// function.
//  5. Add a condition to check if the value of the countdown is not less than 1, 
// then continue to loop by calling the function within itself.
//  6. Make sure you add a decrement operator on the countdown so the preceding 
// condition eventually will be true to end the loop. Every time it loops, the 
// value will decrease until it reaches 0.
//  7. Update and create a second countdown using a condition if the value is 
// greater than 0. If it is, decrease the value of the countdown by 1.
//  8. Use return to return the function, which then invokes it again and again 
// until the condition is no longer true.
//  9. Make sure, when you send the new countdown value as an argument into 
// the function, that there is a way out of the loop by using the return keyword 
// and a condition that continues the loop if met.
// 1. Set the start variable
let start = 10;

// 2. Create a function for countdown
function countdown(value) {
    // 3. Output current value
    console.log(value);

    // 4. If value is less than 1, stop the function
    if (value < 1) {
        return;
    }

    // 5 & 6. Otherwise, call the function again with decremented value
    countdown(value - 1);
}

// First countdown example
console.log("=== First Countdown ===");
countdown(start);

// 7. Second countdown: only loop if value > 0
function countdownAlt(value) {
    console.log(value);

    // 9. Stop when value is 0 or less
    if (value <= 0) {
        return;
    }

    // 8. Decrease value and call again
    return countdownAlt(value - 1);
}

// Second countdown example
console.log("=== Second Countdown ===");
countdownAlt(start);
