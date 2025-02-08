// conditional statement

const price = 3001;
if (price > 3000){
    // 10% discount 
    const discount = price * 10 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    // 5% discount 
    const discount = price * 5 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}

// restaurant discount;

const age = 62;
const price2 = 500;

if(age <=12){
    // 30% discount
    const discount = price2 * 30 /100;
    const payAmount = price2 - discount; 
    console.log ("enjoy 30% discount =" + payAmount);
}
else if(age >= 60){
    // 50% discount
    const discount = price2 * 50 /100;
    const payAmount = price2 -discount;
    console.log("uncle you got our 50% discount =" + payAmount);
}
else {
    console.log(price2);
}


// ternary operator 

let price3 = 300;
const isTeacher = false;

// simple if-else
if(isTeacher === true){
    price3 = price3 * 40 /100;
}
else {
    price3 += 100;
}
console.log(price3);

// simple ternary
price3 = isTeacher === true ? price3 * 40 /100 : price3 += 100;

console.log(price3);


// logical not 

const isStudent = false;

if (!!isStudent){
    console.log("u can go in")
}
else {
    console.log("u r not allowed")
}