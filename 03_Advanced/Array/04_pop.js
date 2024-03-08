// pop() method removes the last element from an array and returns the removed element

const numbers = [10, 20, 30];
const last = numbers.pop();

console.log(last); // 30
console.log(numbers.length); // 2

const number = [];
const las = number.pop();

console.log(las);   //undefined
console.log(number.length); //0