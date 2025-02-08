

// BMI calculator
const weight = parseFloat(prompt("Enter Your Weight (kg):"));
const height =  parseFloat(prompt("Enter Your Height (m)"));
const BMI  = weight / (height ** 2);

if(BMI < 18.5){
    document.write("Your r UnderWeight.")
}
else if(BMI >=18.5 && BMI <=24.9){
    document.write("Your r Normal")
}
else if(BMI >=25 && BMI <=29.9){
    document.write("Your Over Weight.")
}
else {
    document.write("Your r Obese.")
}
