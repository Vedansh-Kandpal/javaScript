// an array of city objects where each object contains two properties: name and population.
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

// find the city whose population is greater than 3 million,

let bigCities=[];
for (let i = 0; i < cities.length; i++) {
    // console.log(cities[i]);
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);

console.log('________________________________________');

let newBigCities = cities.filter((e)=>{
    return e.population > 3000000
})
console.log(newBigCities);