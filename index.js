// alert("hello this is an external js file");

// console.log(7),
// console.log("this is an text in console")

// var num = 23;

// num = toString(num);
// console.log(typeof(num));

// var age = "24";
// age = parseInt(age);
// console.log(typeof(age));
// // console.log(age);


// var number = "2.543334";

// number = parseInt(number);

// console.log(typeof(number));

// var number = 34.45322;

// console.log(number.toFixed(1));
// console.log(number.toPrecision(4));

// var number = "245647643";

// console.log(number.parse(number));

// var firstName = "Mamunur";
// var lastName = " Rashid";

// var fullName = firstName + lastName;

// document.write("My Name is " + fullName);



// var num1, num2, num3;

// num1 = 10;
// num2 = 20;
// num3 = 30;

// document.write("num1 = " + num1 +". num2 =" + num2 +". num3 = " + num3);

// var text = "Bangladesh";

// document.write(text.length);
// var len = text.length;
// document.write(len);

// var text = prompt("Enter Your Email:");
// document.write(text.length);

// var name = "Malaysia";

// document.write(name.charAt(4));


// var text1 = "bangladesh ";
// var text2 = "is a beautiful country"

// text1 = text1.toUpperCase();

// document.write(text1.concat(text2));

// var sliceText = text1.slice(5, 8);
// document.write(sliceText);


// task -----

// var firstName = prompt("Enter Your First Name:");
// var lastName = prompt("Enter Your Last Name:");

// var fullName = firstName.concat(lastName);
// fullName = fullName.toUpperCase();

// document.write("<h1>full name length</h1>");
// var len = fullName.length;
// document.write(len);

// document.write("<h1>full name uppercase</h1><br>");
// document.write(fullName);

// document.write("<h1>full name no 2 position</h1>");
// var position2 = fullName.charAt(1);
// document.write(position2);



// user er kach theke input niye ta intiger a convert kore dekanu

// var num1 = prompt("enter first number :");
// var num2 = prompt("enter second number :");

// num1 = parseInt(num1, 10);
// num2 = parseInt(num2, 10);
// var sum = num1 + num2;
// var sub = num1 - num2;

// document.write("Addition ="+ sum +"<br>");
// document.write("Subtract  ="+ sub +"<br>");



// task 3

var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);


var add, sub, mul, div, rem;

// sum of user input
add = num1 + num2;
document.write(num1 + " + " + num2 + " = " + add + "<br>");

// subtraction of user input
sub = num1 - num2;
document.write(num1 + " - " + num2 + " = " + sub + "<br>");

// multiplication  of user input
mul = num1 * num2;
document.write(num1 + " * " + num2 + " = " + mul + "<br>");

// division of user input
div = num1 / num2;
document.write(num1 + " / " + num2 + " = " + div + "<br>");

// rem of user input
rem = num1 + num2;
document.write(num1 + " % " + num2 + " = " + rem + "<br>");



/**  module 1 task**/ 

var myMoney, orangePrice, applePrice;

myMoney = 700;
orangePrice = 230;
applePrice = 320;

var totalCost = orangePrice + applePrice;
var result = myMoney -totalCost;
console.log(result);

/** task 2**/ 

// 75.25, 65, 80, 35.45, 99.50 Mathematics, Biology, Chemistry, Physics, and Bangla 

var math, bio, chem, phy, bang;
math = 75.25;
bio = 65;
chem = 80;
phy = 35.45;
bang = 99.50;

var average = (math + bio + chem + phy + bang) /5;
document.write(average.toFixed(2));