// every: Determining If All Array Elements Pass a Test


let numbers = [2, 4, 6];
let isEven = numbers.every(function (e) {
    return e % 2 == 0;
});

console.log(isEven);
