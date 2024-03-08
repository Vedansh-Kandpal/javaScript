// unshift() method adds one or more elements to the beginning of an array and returns the new array’s length.
let numbers = [30, 40];

const length = numbers.unshift(20);

console.log({ length });        //output:  { length: 5 }
//{ length } => This is an example of object shorthand notation in JavaScript, where the variable name newLength becomes a property name and its value is used as the property value.
console.log({ numbers });

const newLength = numbers.unshift(0,10);

console.log({ newLength });
console.log({ numbers });