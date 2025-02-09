// find all the odd numbers from 61 to 100; (with while loop)

let n = 1;
let sum = 0;
while(n <= 10){
    if(n % 2 === 1){
        sum = sum + n;
        console.log("odd Number :", n);
    }
    n++;
}
console.log("sum of all odd numbers from 61 to 100 =", sum)



// find all the even numbers from 78 to 98; (with while loop)

let even = 78;
let sum2 = 0;
while(even <= 98){
    if(even % 2 === 0){
        console.log("Even Number: " ,even);
        sum2 = sum2 + even
        console.log("sum of all the Even numbers from 78 to 98 =", sum2)
    }
    even++;
}
console.log("sum of all the Even numbers from 78 to 98 =", sum2)
