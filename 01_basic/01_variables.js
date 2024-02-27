const userID = 123;
let userName="vedansh";
var userEmail="vedansh@gmail.com";
userContact = 8000000140

/*

userID=321     error: TypeError: Assignment to constant variable.
console.log(userId)
we can not change the value of const if we try then it throw an type error

*/

userName="vedansh kandpal";
userEmail="vedanshkandpal@gmail.com"
userContact=7000000052

console.table([userID, userName, userEmail ,userContact])

/*
prefer not to use var
because of in issue in block scope and functional scope
*/