//  Manipulating an array

//  Take the following array: 

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,{test: 'one', score: 55}, ['one', 'two']];

// transform it into the following:

//  ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,{test: 'one', score: 55}, ['one', 'two']];
theList[0]="FIRST";
theList.splice(2,4,"MIDDLE")
theList[3] = "hello world"
theList[4] = "LAST"
//console.log(theList)


// In this project, you will implement a data structure for a product catalog and create 
// queries to retrieve data.

//  1. Create an array to hold an inventory of store items.
let inventory = [];

//  2. Create three items, each having the properties of name, model, cost, and 
// quantity.
let item1 = {
    name:"item1",
    model:"model1",
    cost:123,
    quantity:20
}
let item2 = {
    name:"item2",
    model:"model2",
    cost:123,
    quantity:30
}
let item3 = {
    name:"item3",
    model:"model3",
    cost:123,
    quantity:40
}

//  3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.
inventory.push(item1,item2,item3)
console.log(inventory)

//  4. Access the quantity element of your third item, and log it to the console. 
console.log(inventory[2].quantity)


//  Self-check quiz
//  1. Can you use const and update values within an array?
                 //yes we can use const with arrays and still update their contents, but you cannot reassign the entire array to a new value.

//  2. Which property in an array gives the number of items contained in the array?
                //.length property

//  3. What is the output in the console?
 const myArr1 = [1,3,5,6,8,9,15];
 console.log(myArr1.indexOf(0));//-1
 console.log(myArr1.indexOf(3));//1

//  4. How do you replace the second element in an array myArr = 
// [1,3,5,6,8,9,15] with the value 4?
let arr = [1,3,5,6,8,9,15];
arr[1] = 4;
console.log(arr)

//  5. What is the output in the console?
 const myArr2 = [];
 myArr2[10] = 'test'
 console.log(myArr2);//empty items
 console.log(myArr2[2]);//undefined

//  6. What is the output in the console?
 const myArr3 = [3,6,8,9,3,55,553,434];
 myArr3.sort();
 myArr3.length = 0;
 console.log(myArr3[0]);//undefined