// ticket fare calculator
const fare = 800;
const age = 20;
const isStudent = false;

if(age <=10){
    console.loge("u r free to travel")
}
else if(age <= 25 && isStudent){
    discount = fare * 50 /100;
    console.log("with 50% discount fare =" + (fare - discount))
}
else if(age >=30){
    discount = fare * 15 /100;
    console.log("with 15% discount fare =" + (fare - discount))
}
else {
    console.log(fare);
}


// another one 
const num = 7;
if(num%2==0){
    console.log("its a Even Number")
}
else {
    console.log("its a Odd Number")
}


// grade system if-else

const marks = 55;

if(marks >= 80 && marks <=100){
    console.log("Grade : A+")
}
else if(marks >=70 && marks <=79){
    console.log("Grade : A")
}
else if(marks >=60 && marks <=69){
    console.log("Grade : B")
}
else if(marks >=50 && marks <=59){
    console.log("Grade : C")
}
else if(marks >=40 && marks <=49){
    console.log("Grade : D")
}
else if(marks >=33 && marks <=399){
    console.log("Grade : E")
}
else {
    console.log("Fail")
}