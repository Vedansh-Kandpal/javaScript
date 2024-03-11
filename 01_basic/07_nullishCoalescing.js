// The nullish coalescing operator returns the second value (value2) if the first value (value2) is null or undefined.


//older way

let result;
if(result === null || result === undefined) {
    result= 'John'
}
console.log(result);

// nullish coalescing operator

const name = null ?? 'John';
console.log(name);

let count=10;
let resultt = count || 1 ;
console.log(resultt); // 1