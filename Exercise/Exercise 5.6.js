//  1. Create an empty array
//  2. Run a loop 10 times, adding a new incrementing value to the array
//  3. Log the array into the console
//  4. Use the for loop to iterate through the array (adjust the number of iterations 
// to however many values are in your array) and output into the console
//  5. Use the for of loop to output the value into the console from the array

let arr = [];
for(let i = 0;i<10;i++){
    arr.push(i+1)
}
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let num of arr){
    console.log(num)
}