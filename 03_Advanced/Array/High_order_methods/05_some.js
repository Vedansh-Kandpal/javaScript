// some: Check If at Least one Array Element Passes a Test


let numbers = [2, 3, 7];
let isEven = numbers.some(function (e) {
    return e % 2 == 0;
});

console.log(isEven);
