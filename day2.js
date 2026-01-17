//day2.js

// Task 1
const a = 10
const b = 3
console.log(a + b) // 13
console.log(a - b) // 7
console.log(a * b) // 30
console.log(a / b) // 33.33

// Task 2
const myAge = 20
console.log(myAge > 18) // true
console.log(myAge === 18) // false
console.log(myAge !== 18) // true

//Task 3
const userAge = 20
if(userAge >= 18) {
    console.log("adult")
} else {
    console.log("Minor")
}

// Task 4 = Access Checker
const hasId = true
const age = userAge

if(age >= 18 && hasId) {
    console.log("Access granted")
} else {
    console.log("Access denied")
}

/*
  Q1. === is strictly checking for values and types, while == is only checking values
  Q2. boolean
  Q3. B
  Q4. Booleans are used to verify statements, and they are very crucial in programming
  Q5. if checks if a condition is true, if it's not, the code in the else works, else, the code in the if works
*/
