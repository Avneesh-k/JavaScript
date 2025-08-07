// Data type in JavaScript 
// Primitive data types


// String 
let str1 = 'String'; //Declare using Single quotes
console.log(typeof str1);

let str2 = 'String'; //Declare using Double quotes
console.log(typeof str2);

let str3 = `String`; //Declare using Backticks: special template strings in which you can use variables directly
console.log(typeof str3);

//  Number
let intnumber = 10;
console.log(typeof intnumber);

let floatnumber = 10.5; //floating points are numbers 
console.log(typeof floatnumber);

// BigInt 
//  The limits of the number data type are between 2 to power 53-1 and -(2 to power 53-1)
//  A BigInt data type can be recognized by the postfix n:

let bignumber = 454234464634453n;
console.log(typeof bignumber); // bigint

// Boolean 
// The Boolean data type can hold two values: true and false.

let bool1 = true;
let bool2 = false;
console.log(typeof bool1);
console.log(typeof bool2);


//  Undefined
// It has a special data type for a variable that has not been assigned a value.
let unassigned;
console.log(unassigned);

// null
// null is a special value for saying that a variable is empty or has an unknown value. This is case sensitive. You should use lowercase for null.
let empty = null;
console.log(typeof empty);//object 