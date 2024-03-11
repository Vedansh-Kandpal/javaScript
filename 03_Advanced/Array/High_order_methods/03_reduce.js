// an array of numbers
let numbers = [1, 2, 3];

// calculate the total of elements
let sum = 0

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)

let summ = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(summ)