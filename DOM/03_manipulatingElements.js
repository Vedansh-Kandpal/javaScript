let element = document.getElementById('manipulating');
console.log(element)
let div = document.createElement('div');
div.id = 'content';
div.innerHTML = '<p>CreateElement example</p>';
document.body.appendChild(div);
element.appendChild(div);




let box = document.querySelector('#parant');

// let width = box.offsetWidth;
// let height = box.offsetHeight;
// console.log({ width, height });

// const domRect = box.getBoundingClientRect();
// console.log(domRect);