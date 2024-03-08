let colors = ['red', 'green', 'blue'];
console.log(colors.length)
console.log(colors);
colors.push('yellow')
console.log(colors.length)
console.log(colors);
colors.length=3
console.log(colors);
console.log(colors.length)
colors.push('yellow',"pink")
console.log(colors);

colors.length=3
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

colors.push(...cmyk);

console.log(colors);