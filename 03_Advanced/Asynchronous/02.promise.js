//  The constructor syntax for a promise object is:

/* _____________________________________________

let promise = new Promise(function(resolve, reject) {
    // executor     
});
_____________________________________________ */

// The function passed to new Promise is called the executor.
//  When new Promise is created, the executor runs automatically.

// When the executor obtains the result, it should call one of these callbacks:

// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object.

// the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

// The promise object returned by the new Promise constructor has these internal properties:

// state — initially "pending", then "fulfilled" when resolve is called ,"rejected" when reject is called.
// result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.

let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

// const promise = getUsers();
// promise.then(onFulfilled, onRejected);
// promise.catch((error) => {
//   console.log(error);
// });
// promise.finally(() => {
//   console.log("finally");
// });

 getUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {      //If you want to get the error only when the state of the promise is rejected, you can use the catch() method
    console.log(error);
  })
  .finally(() => {
    console.log("finally");   //Sometimes, you want to execute the same piece of code whether the promise is fulfilled or rejected
  });