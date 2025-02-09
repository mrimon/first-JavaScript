// find all odd numbers from 32 to 56;
let sumOdd = 0;
for(let n = 32; n <= 56; n++){
    if(n % 2 != 0){
        console.log(n, ": odd number")
    }
    sumOdd = sumOdd + n;
}
console.log("sum of all odd number from 32 to 56 =", sumOdd)