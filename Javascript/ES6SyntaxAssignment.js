//Refactor the following function into a one-liner

const printName = name => {
  return 'Hi ' + name
}
console.log(printName('Naresh'))

//After Refactoring  the function into a one-liner
const printNameSolution = name => `Hi ${name}`
console.log(printNameSolution('Naresh'))

//using Template literals
const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`
console.log(printBill('Naresh', '100'))

//Modify the following code such that the object properties are destructured and logged.
const person = {
  name: 'Noam Chomsky',
  age: 92
}

let name = person.name
let age = person.age
console.log(name)
console.log(age)

//Destructure

const person1 = {
  name1: 'Naresh chinturi',
  age1: 38
}
const { name1, age1 } = person1
console.log(name1)
console.log(age1)
