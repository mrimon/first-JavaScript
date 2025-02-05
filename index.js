// how to calculate  to fahrenheit   

var cel = parseFloat(prompt("Enter Celsius :"));
var fah = (((cel * 9/5) + 32).toFixed(2));

document.write("Fahrenheit =" + fah);
