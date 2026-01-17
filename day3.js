// day3.js

//Task 1
function sayName(name) {
    console.log("Hello " + name)
}
sayName("CodeKage")
sayName("Luqman")
sayName("Olasunkanmi")

//Task 2
function printName(age) {
    console.log("you are " + age + " years old")
}
printName(20)

//Task 3
function multiply(a, b) {
    const times = a*b
    return times
}
const result = multiply(5, 2)
console.log(result) // 10

//Mini Build
function checkAge(age) {
    if (age >= 18) {
        return "Adult"
    }
    else {
        return "Minor"
    }
}
console.log(checkAge(20))

/*
  Q1. A function is a reusable block of code
  Q2. A value printed can only be used in the function, a value returned can be used outside the function
  Q3. nothing happens
  Q4. 10
      Hi
  Q5  because they allow us resuse code
*/