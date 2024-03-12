
// The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.
let idElem = document.getElementById('id__')
let output = document.getElementById('output')

// The getElementsByName() accepts a name which is the value of the name attribute of elements and returns a live NodeList of elements.
let elemName = document.getElementsByName('field')
let btn = document.getElementsByName('btn')

btn[0].addEventListener('click', () => {

            output.innerText = `Your Name is: ${elemName[0].value}`;
  

});

// The getElementsByTagName() method accepts a tag name and returns a live HTMLCollection of elements with the matching tag name in the order which they appear in the document.

let inputt = document.getElementsByTagName('input')

// getElementsByClassName()
let elements = document.getElementsByClassName('heading');


let element = document.querySelector('heading');
let element2 = document.querySelectorAll('heading');
