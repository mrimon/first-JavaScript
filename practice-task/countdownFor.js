// countdown from 21 to 15 with for loop

let sum = 0;
for(let i = 21; i >=15; i--){
    if(i % 2 != 1){
        console.log(i);
        sum = sum + i;
    }
    
}
console.log("Total =", sum)


// countdown from 21 to 15 with while loop

let n = 21;
let sum2 = 0;
while(n >=15){
    if(n % 2 === 1){
        console.log(n);
        sum2 = sum2 + n;
    }
    n--;

}
console.log("Total of Odd numbers from 21 to 15 =", sum2)