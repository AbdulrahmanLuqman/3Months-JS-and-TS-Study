/*
    🧠 LEETCODE FOUNDATION: Your First Algorithm Problem (30 mins)
Let's solve a real problem step by step!
Problem: FizzBuzz Foundation
We'll start with something simpler that builds the same skills.
Problem 1: Number Info
Write a program that takes a number and tells you:

If it's positive, negative, or zero
If it's even or odd
If it's greater than 100
*/

const number = 10
const positive = number > 0
const negative = number < 0
const isZero = number === 0
const even = number % 2 === 0
const odd = number % 2 !== 0
const greaterThan100 = number > 100

/* 
    Problem 2: Temperature Converter
Convert Celsius to Fahrenheit and determine if it's freezing, cold, warm, or hot.
Formula: F = (C * 9/5) + 32
*/
const celsius = 25
const fahrenheit = (celsius * 9/5) + 32