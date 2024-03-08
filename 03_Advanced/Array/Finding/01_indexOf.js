// To find the position of an element in an array, you use the indexOf() method. 
// This method returns the index of the first occurrence the element that you want to find, or -1 if the element is not found.

// Array.indexOf(searchElement, fromIndex)

// The searchElement argument is the element that you want to find in the array.
// The fromIndex is an array index at which the function starts the search.

var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1  (NOT FOUND)
console.log(scores.indexOf(20)); // 1

console.log(scores.indexOf(20,-1)); // 5 (fromIndex = 6+ (-1) = 5)
console.log(scores.indexOf(20,-5)); // 1 (fromIndex = 6+ (-5) = 1)


// lastIndexOf() returns the index of the last occurrence of the searchElement in the array. It returns -1 if it cannot find the element.
console.log(scores.lastIndexOf(10));// 3
console.log(scores.lastIndexOf(20));// 5