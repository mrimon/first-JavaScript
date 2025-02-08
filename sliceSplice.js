const fruits = ["Banana", "kiwi", "Mango", "Apple"];

// to slice an arrow
const sliceFruits =fruits.slice(2,3);
console.log(sliceFruits);
// to splice into an array

 fruits.splice(2, 0, "lemon");
console.log(fruits);


// Create an Array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits2)