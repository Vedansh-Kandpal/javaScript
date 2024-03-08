// splice() method that allows you to insert new elements into the middle of an array.
//  Also, you can use this method to delete and replace existing elements as well.

// Deleting elements   : return the deleated elements

let scores = [1, 2, 3, 4, 5];
console.log(scores.splice(0, 3)); //delete form index 0 to index 3 mean the items on intdex 0,1,2 are deleated 
console.log(scores);  

// ______________________________________________________________________________


// Inserting elements   :it returns an empty array

// syntax   Array.splice(position,0,new_element_1,new_element_2,...);
// 0 instructs the splice() method to not delete any array elements

let colors = ['red', 'green', 'blue'];
console.log(colors.splice(2, 0, 'purple'));
console.log(colors);
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors); 


// ______________________________________________________________________________


// Replacing elements : return replaced element

let languages = ['C', 'C++', 'Java', 'JavaScript'];
console.log(languages.splice(1, 1, 'Python'));
console.log(languages)


console.log(languages.splice(2,1,'C#','Swift','Go'));
console.log(languages)
