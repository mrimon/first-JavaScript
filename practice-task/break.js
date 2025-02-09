// write a loop from 1 to 200 and use break to exit when found 100;

// for(let i = 1; i <=200; i++){
//     if(i >= 100){
//         break;
//     }
// }
// console.log(i);

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

// let n = 1;
// let sum = 0;
// while(n <= 50){
//     sum = sum + n;
//     if(sum >= 100){
//         break;
//     }
//     n++;
//     console.log("number =",n);
//     console.log("Total =",sum);
// }



// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
let  = 0;
for(let i = 1; i <= 100; i++){
    let square = Math.sqrt(i)
    console.log(i);
    if(Number.isInteger( square) && i != 1){
        break
    }
}
