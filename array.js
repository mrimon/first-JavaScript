const numbers = [12, 23 , 34, 45, 46];
// to replace element of array
numbers[0] = 34;
console.log(numbers);

// to see how many element of an array
console.log(numbers.length);
// to see index 3 element
console.log(numbers[3])

// to insert Element at the end of an Array
numbers.push(30);
numbers.push(35);
numbers.push(34);
numbers.push(36);
console.log(numbers);

// to remove Element from the end of an Array
numbers.pop()
console.log(numbers);

// to remove element from the beginning of an arroy
numbers.shift();
console.log(numbers)

// to insert element at beginning of an array
numbers.unshift(999);
console.log(numbers)

// includes

const espNum = numbers.includes(999);
console.log(espNum);

if(espNum){
    console.log("call police")
}
else{
    console.log("nothing to do")
}

// to know index no of an element
console.log(numbers.indexOf(34));

// to know is this an array
const num = 25;
const food =[];

console.log(Array.isArray(numbers));
console.log(Array.isArray(num));
console.log(Array.isArray(food));

