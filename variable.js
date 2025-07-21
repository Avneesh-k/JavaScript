const UserId = 1234; // Initialize only once. Cannot be reassigned.
var UserCity = "Kannauj"; // 'var' has function scope; allowed in older JS versions.
let UserName = "Avneesh Kumar"; // 'let' has block scope (preferred over 'var').

// UserId = 12345; //  Not allowed because 'const' cannot be reassigned.

// Not declared with var/let/const, makes it global (bad practice)
Name = "Avneesh Kumar"; // Avoid using undeclared variables.

// console.log(Name); //  Works, but not a good practice without declaration.

console.log(UserCity);   // Output: Kannauj
console.log(UserName);   // Output: Avneesh Kumar

// Reassigning variables (allowed for var and let)
UserCity = "Delhi";
UserName = "Monty";

// Display values in a table
console.table([UserId, UserName, UserCity]);


