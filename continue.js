// continue ----> skip rest of the code for this iteration
//break --------> loop end here;

// for(let i = 20; i >= 10; i--){
//     if(i % 2 ===1){
//         continue;
//     }
//     console.log(i);
// }
const array = [1, 2, 3, 4, 5, 6, 7];
for(let i = 1; i < array.length; i++){
    if(i == 5){
        continue;
    }
    console.log(array[i]);
}