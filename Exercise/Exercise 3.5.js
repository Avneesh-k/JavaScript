//  1. Create an object named people that contains an empty array that is called 
// friends.
let people = {
    friends: [],
}
//  2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
let friend1 ={
    firstName:"Avneesh1",
    lastName:"Kumar1",
    Id:1231,
}
let friend2 ={
    firstName:"Avneesh2",
    lastName:"Kumar2",
    Id:1232,
}
let friend3 ={
    firstName:"Avneesh3",
    lastName:"Kumar3",
    Id:1233,
}

//  3. Add the three friends to the friend array.
people.friends.push(friend1,friend2,friend3)
//  4. Output it to the console.
console.log(people)
