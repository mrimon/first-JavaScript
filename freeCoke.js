const burgerPrice = parseInt(prompt("Burger Price :"));
const cokePrice = 30;
const total = burgerPrice + cokePrice;

if (burgerPrice > 400) {
    document.write(burgerPrice + "<br/> congrats! you Got a free Coke.")
}
else {
    document.write("tk" + total);
}


