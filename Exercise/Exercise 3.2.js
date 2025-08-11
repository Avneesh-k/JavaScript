//  1. Create an empty array to use as a shopping list.
let shopping_list = [];

//  2. Add Milk, Bread, and Apples to your list.
shopping_list.push("Milk","Bread","Apples")

//  3. Update "Bread" with Bananas and Eggs.
shopping_list.splice(1,1,"Bananas","Eggs")

//  4. Remove the last item from the array and output it into the console.
shopping_list.pop()
console.log(shopping_list)

//  5. Sort the list alphabetically.
shopping_list.sort()
console.log(shopping_list)

//  6. Find and output the index value of Milk.
console.log(shopping_list.indexOf("Milk"))

// array.findIndex(callback)
console.log(shopping_list.findIndex(function(e) {return e ==="Milk"}))

//  7. After Bananas, add Carrots and Lettuce.
shopping_list.splice(1,0,"Carrots","Lettuce")

//  8. Create a new list containing Juice and Pop.
let new_lst = ["Juice","Pop"]

//  9. Combine both lists, adding the new list twice to the end of the first list.
let add_list = shopping_list.concat(new_lst,new_lst)

//  10. Get the last index value of Pop and output it to the console.
console.log(add_list.lastIndexOf("Pop"))

//  11. Your final list should look like this:
console.log(add_list)

//  ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", 
// "Pop", "Juice", "Pop"]