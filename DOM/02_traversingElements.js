// Get the Parent Element
let output = document.getElementById('output')
console.log(output.parentNode)


// Get the next siblings

// The nextElementSibling returns null if the specified element is the last one in the list.
// let current = document.querySelector('.current')
// console.log(output.nextSibling)

let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log(nextSibling)
console.log(nextSibling.innerText)


// Get the previous siblings
let prevSibling = current.previousElementSibling;
console.log(prevSibling)
console.log(prevSibling.innerText)



// Getting Child Elements
let content = document.getElementById('menu');
console.log(content.firstElementChild);
console.log(content.lastElementChild);
console.log(content.children);