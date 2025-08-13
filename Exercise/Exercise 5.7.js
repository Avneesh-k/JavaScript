//  1. Create a simple object with three items in it.
//  2. Using the for in loop, get the properties' names and values from the object 
// and output them into the console.
//  3. Create an array containing the same three items. Using either the for loop or 
// the for in loop, output the values from the array into the console.

let obj = {
    name:"item1",
    color:"red",
    model:"2020"
}
for(let prop in obj){
    console.log(prop,obj[prop])
    
}
const arr = ["item1","red","2020"]
for(let num of arr){
    console.log(num)
}