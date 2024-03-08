 /*_______________This_________________*/

//   this is a special keyword that refers to the object executing a function or method

// he value of this is depending on how a function is called, and it is determined dynamically at runtime. Additionally, the value of this can be different within the same function depending on how the function is called.

let person = {
    firstName: "Paul",
    lastName: "Knulst",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(person.fullName());