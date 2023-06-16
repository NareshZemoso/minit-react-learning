/**
 *
 * Assume we are fetching the data from a rest endpoint in the get data function.
 * we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
 *
 */

function getData (uId) {
  setTimeout(() => {
    console.log('Fetched the data!')
    return 'skc@gmail.com'
  }, 4000)
}

console.log('start')
var email = getData('skc')
console.log('Email id of the user id is: ' + email)
console.log('end')

// How do you solve this problem. How can we wait for till the function execution is completed, so that we can have correct email at line 10?

//Using promise

console.log('Using Promise: ')
function fetchData () {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation, such as fetching data from an API
    setTimeout(() => {
      const email = 'skc@gmail.com'
      // Resolve the promise with the data
      resolve(email)
      // Reject the promise if an error occurs
      // reject(new Error("Failed to fetch data"));
    }, 4000)
  })
}

console.log('start')
// Using the promise
fetchData()
  .then(email => {
    console.log('Email id of the user id is: ' + email)
    // Perform further operations with the data
  })
  .catch(error => {
    console.error('Error:', error)
  })

console.log('end')
