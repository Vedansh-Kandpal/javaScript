// findIndex() to the Array.prototype, which allows you to find the first element in an array that satisfies a provided testing function. and return index no
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 10);
console.log(index);