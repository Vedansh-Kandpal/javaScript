// you have an array of numbers where each element represents the radius of a circle 
let circles = [ 10, 30, 50 ];

// calculate the area of each circle and push the result into a new array.

// using loop
let areas = []; // to store areas of circles
let area = 0;
for (let i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas);


// map() method allows us to transform the array elements in a cleaner way.
function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
let areasNew = circles.map(circleArea);
console.log(areasNew);