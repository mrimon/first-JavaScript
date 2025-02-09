// all odd and even number and sum of them from 44 to 99 with for loop


// Even Number and sum of them
let sum = 0;
for(let i = 44; i <= 99; i++){
    if(i % 2 != 1){
        console.log("even number:", i);
        sum = sum + i;
    }
}
console.log("sum of the  Even numbers =", sum)


// odd number and sum of them

let sum2 = 0;
for(let i2 = 44; i2 <= 98; i2++){
    if(i2 % 2 != 0){
        console.log("odd number =", i2)
        sum2 = sum2 + i2;
    }
}
console.log("Total of odd numbers from 44 to 98 =", sum2)