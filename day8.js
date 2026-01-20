// Exercise 1: Simple IF statements

const temperature = 28;
const isRaining = false;
const hasUmbrella = true;

// TODO: Write if statements for:
// 1. If temperature is above 25, log "It's a hot day!"
// 2. If it's raining, log "Don't forget your umbrella!"
// 3. If it's raining AND you don't have an umbrella, log "You'll get wet!"

// Your code here:
if(temperature > 25) {
    console.log("It's a hot day")
}

if(isRaining) {
    console.log("Don't forget your umbrella!")
}

if(isRaining && !hasUmbrella) {
    console.log("You'll get wet")
}

// Exercise 2: IF...ELSE practice

const age = 20;
const accountBalance = 50;
const minimumBalance = 100;

// TODO:
// 1. Check if age >= 18, log "Adult" or "Minor"
// 2. Check if accountBalance >= minimumBalance, log "Sufficient funds" or "Insufficient funds"
// 3. Create a variable hasDiscount (true if age < 18 OR age >= 65), 
//    log "Discount applied" or "Regular price"

// Your code here:

if(age >= 18) {
    console.log("Adult")
} else {
    console.log("Minor")
}

if(accountBalance >= minimumBalance) {
    console.log("Sufficient funds")
} else {
    console.log("Insufficient funds")
}

const hasDiscount = age < 18 || age >= 65
if(hasDiscount) {
    console.log("Discount applied")
} else {
    console.log("Regular price")
}

// Exercise 3: ELSE IF practice

// Part 1: BMI Calculator
const weight = 70; // kg
const height = 1.75; // meters
const bmi = weight / (height ** 2);

// TODO: Calculate BMI and determine category:
// - BMI < 18.5: "Underweight"
// - BMI < 25: "Normal weight"
// - BMI < 30: "Overweight"
// - BMI >= 30: "Obese"

console.log(`BMI: ${bmi}`);
// Your code here:

if (bmi < 18.5) {
    console.log("Underweight")
} else if(bmi < 25) {
    console.log("Normal weight")
} else if (bmi < 30) {
    console.log("Overweight")
} else {
    console.log("Obese werey")
}

// Exercise 4: Nested IF practice

// Online Shopping Scenario
const isLoggedIn = true;
const cartTotal = 120;
const hasCoupon = true;
const couponValue = 20;

// TODO: 
// 1. Check if user is logged in
//    - If yes, check if cart total > 50
//      - If yes, check if has coupon
//        - If yes, apply discount and show final price
//        - If no, just show cart total
//      - If no, say "Add more items for free shipping!"
//    - If no, say "Please log in to checkout"

// Your code here:

if(isLoggedIn) {
    if (cartTotal > 50) {
        if(hasCoupon) {
            const discount = cartTotal - couponValue
            console.log(discount)
        } else {
            console.log(cartTotal)
        }
    } else {
        console.log("Add more items for free shipping!")
    }
} else {
    console.log("please og in to checkout")
}