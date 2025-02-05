// how to calculate fahrenheit to celsius  

var fah = parseFloat(prompt("Enter Fahrenheit :"));
var cel = ((fah -32) * (5/9).toFixed(2));

document.write("Celsius =" + cel);
