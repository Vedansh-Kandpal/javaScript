// In JavaScript, variables declared inside functions are only accessible within that function's scope and cannot be accessed from the outside.

// if you declare a function inside another function, the inner function can access the outer function's variables and functions, even if they are not passed as arguments. This is working, because the inner function creates a closure that preserves the outer function's variables and functions, and retains access to them.

function outer() {
    const name = "Paul";
    function inner() {
      console.log("Hello, " + name + "! Welcome to paulsblog.dev");
    }
    return inner;
}
  
  const sayHello = outer();
  sayHello();






 