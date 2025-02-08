const num1 = 88;
const num2 = 65;
let result;

if(num1 > num2){
     result = num1 * 2;
}
else{
     result = num1 + num2;
}
console.log(result);

// ternary
result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result)


// ternary another one
const grade1 = 89;
const grade2 = 74;
let result2 = grade1 < grade2 ? grade1 + grade2 : grade1 * 2;
console.log(result2);

// another one
const age = 13;

const beverage = age >=18 ? "Energy Drink" : "juice";
console.log(beverage);


// another one 
const hena = "american";

hena == "Banglashi" ? console.log(true): console.log(false);