//  Use the arrow format to create functions that output the values one and two to the 
// console. Create a third function that outputs the value three to the console, and then 
// invokes the first two functions.
//  Create a fourth function that outputs the word four to the console and also use 
// setTimeout() to invoke the first function immediately and then the third function.
//  What does your output look like in the console? Try to get the console to output:
//  Four
//  Three
//  One
//  Two
//  One

let fun1 = ()=>{
    console.log("one");

}

let fun2 = ()=>{
    console.log("Two");

}

let fun3 = ()=>{
    console.log("Three");
    fun1();
    fun2();

}

let fun4 = ()=>{
    console.log("Four");
    setTimeout(fun1,0);
    fun3();

}

fun4()