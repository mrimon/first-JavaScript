// 1 sum of odd numbers from 81 to 100;
let num = 81;
let sum = 0;
while(num <=131){
    if(num % 2 !=0){
        sum = sum + num;
        console.log("serial NO.", num, "odd numbers sum: ", sum)
    }
    num++;
}

// // sum of all the even number from 206 to 311
let num2 = 206;
let sum2 = 0;
while(num2 <= 311){
    if(num2 % 2 ===0){
        sum2 = sum2 + num2;
        console.log("serial No. ", num2, "sum: ", sum2);
    }
    num2++;
}