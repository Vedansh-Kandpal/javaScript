let city = ["California", "Barcelona", "Paris", "Kathmandu"]

// lenght
console.log(city.length)
for(let i=0; i < city.length; i++){
    console.log(city[i])
}

// reverse
console.log(city.reverse())
console.log([...city].reverse())

// sort
console.log(city.sort())

// fill  syntax: [ arr.fill(value, start, end) ]
let newCity = [...city]
console.log(newCity)
console.log([...newCity].fill('hello'))
console.log([...newCity].fill('hello', 2,3))

// join
console.log( newCity.join(" "))
console.log( newCity.join(", "))

//toString
let nestedArray = [1, 2, 4, ["Apple", 5]];
console.log(newCity.toString())
console.log(nestedArray.toString())


//pop remove last elem
// console.log( city.pop())
// console.log(city)
console.log(newCity.pop())

//push add elem to the end of arr we can add multipal elem
console.log(newCity.push('London'))
console.log(newCity)
console.log(newCity.push('elem1','elem2'))
console.log(newCity)

//shift remove first elem
console.log(newCity.shift())
console.log(newCity)

//unshift adds one or more elements to the beginning of an array returns new length


console.log(newCity.unshift("JavaScript"));
console.log(newCity)
console.log(newCity.unshift("c", '"C++"'));
console.log(newCity)

//concat()  returns a new array by merging two or more arrays.
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]
var randomList = [1, 2, 3];
var randomNestedList = [
  [4, 5],
  [6, 7],
];
console.log(primeNumbers.concat(evenNumbers))
console.log(evenNumbers.concat(primeNumbers))
console.log(randomList.concat(randomNestedList))


//slice   returns a shallow copy of a portion of an array
let numbers = [2, 3, 4, 7, 11, 13, 17,20];
console.log(numbers.slice(3,6))
console.log(numbers.slice(2))
console.log(numbers.slice(-3))

//important

/*
The find() method returns the value of the first array element 
that satisfies the provided test function.
*/

function isEven(i) {
  return i % 2 == 0;
}

/*
includes() method checks if an array contains a specified element or not.
*/

let evenNumber = numbers.find(isEven);
console.log(evenNumber);
console.log(numbers.includes(11))

/*
filter() method returns a new array with all elements 
that pass the test defined by the given function.
*/

function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}


let even = numbers.filter(checkEven);
console.log(even);