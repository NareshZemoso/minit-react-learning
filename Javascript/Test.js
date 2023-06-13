console.log('hi Naresh')
// Function that takes another function as a parameter
function greet (name, callback) {
  console.log('Hello, ' + name + '!')
  // Call the callback function
  callback()
}

// Callback function passed as a parameter
function sayGoodbye () {
  console.log('Goodbye!')
}

// Call the greet function and pass the sayGoodbye function as a callback
greet('Naresh ch', sayGoodbye)
