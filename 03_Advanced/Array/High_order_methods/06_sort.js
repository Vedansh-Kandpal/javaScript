let numbers = [1, 0 , 3, 2, 30, 20, 10 ];
numbers.sort();
console.log(numbers);
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers);