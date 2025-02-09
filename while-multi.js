// multiplication table for number 5;
// let num = 1;
// let Serial = ;
// while(num <=50){
//     if(num % 5 ===0){
//         console.log("5 *", "=", num)
//     }
//     num++
// }

// give me the sum of all odd numbers from 44 to 99 which r divisable by 3 5;
let sum = 0;
for(i = 44; i <=99; i++){
    if(i % 5 ===0 && i % 3 === 0){
        console.log(i);
        sum = sum + i;
    }
}
console.log("total of all odd numbers from 44 to 99 which r divisable by 3 & 5 =", sum);