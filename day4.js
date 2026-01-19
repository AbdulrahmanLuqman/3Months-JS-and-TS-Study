const fruits = ["apple", "banana", "orange"];

fruits[1] = "mango"
// console.log(fruits);

// for(i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// Mini Build - SUM OF NUMBERS (DSA INTRO)
const numbers = [2, 4, 6 ,8]
let sum = 0
for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
    
}
console.log(sum)

/*
  Q1. i++ icreases the value of i by 1
  Q2. because array might increase ir decrease in length
  Q3. 0, 1, 2
  Q4. because it's suppose to be dynamic incase the array changes
  Q5. a loop is a way to print multiple time without having to rewrite the code again
*/