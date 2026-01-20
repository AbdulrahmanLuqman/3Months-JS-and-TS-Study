// Undefined
let firstName;
let age;
let isStudent;

console.log(firstName); // undefined
console.log(age);       // undefined
console.log(isStudent); // undefined

// Later, you can assign values
firstName = "John";
age = 25;

console.log(firstName); // "John"
console.log(age);       // 25
console.log(isStudent); // still undefined

// Null
// When something doesn't apply
let middleName = null; // Person has no middle name

// Resetting a value
let currentUser = "john123";
console.log(currentUser); // "john123"

// User logs out
currentUser = null;
console.log(currentUser); // null

// Later, new user logs in
currentUser = "jane456";
console.log(currentUser); // "jane456"


// BigInt
// Maximum safe integer
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Beyond this, you lose precision
let big = 9007199254740992;
console.log(big);     // 9007199254740992
console.log(big + 1); // 9007199254740992 (wrong!)
console.log(big + 2); // 9007199254740994 (skipped a number!)

//creating BigInt
// Add 'n' at the end
let bigNumber = 1234567890123456789012345n;
console.log(bigNumber); // 1234567890123456789012345n

// Using BigInt() function
let anotherBig = BigInt("9007199254740993");
console.log(anotherBig); // 9007199254740993n

// You can do math with BigInt
let big1 = 100n;
let big2 = 200n;
console.log(big1 + big2); // 300n

// Symbols
// Each symbol is unique
let sym1 = Symbol("description");
let sym2 = Symbol("description");

console.log(sym1 === sym2); // false (even with same description!)

// They're unique every time
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1); // false

// TypeOff

// Checking types
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof 3.14);        // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JavaScript bug!)
console.log(typeof 123n);        // "bigint"
console.log(typeof Symbol());    // "symbol"

// Exercise 5: Exploring data types

// TODO: Create one variable of each type:
// - A string with your favorite movie
// - A number with the year it was released
// - A boolean if you've watched it
// - A variable set to null (movie you want to watch but haven't picked)
// - A variable that's undefined (movie recommendation you're waiting for)

// TODO: Log each variable AND its type using typeof

// Write your code below:
const favMovie = "Death Note"
const releasedYear = 2016
const watchedIt = true
const watchChainsawmanYet = null
let watchDororo;

console.log(typeof favMovie)
console.log(typeof releasedYear)
console.log(typeof watchedIt)
console.log(typeof watchChainsawmanYet)
console.log(typeof watchDororo)

// Console.logs
/*

## 💻 PART 5: CONSOLE.LOG - YOUR DEBUGGING TOOL (20 mins)

// `console.log()` is how you see what's happening in your code. It's the most important debugging tool!

// Basic Console.log
```javascript
// Print a message
console.log("Hello, World!");

// Print a number
console.log(42);

// Print a boolean
console.log(true);

// Print multiple things
console.log("Age:", 25);
console.log("Name:", "John", "Age:", 25);

*/
// console.log - normal output
console.log("This is regular logging");

// console.error - for errors (shows in red)
console.error("This is an error message!");

// console.warn - for warnings (shows in yellow)
console.warn("This is a warning!");

// console.info - for info
console.info("This is information");

// console.table - for organized data (very useful!)
let person = {
  name: "John",
  age: 25,
  city: "NYC"
};
console.table(person);

/*
  🎯 MAJOR CLASSWORK PROJECT: Personal Calculator (45 mins)
  Now let's combine EVERYTHING we learned today into one complete program!
*/

// ========================================
// DAY 1 PROJECT: PERSONAL CALCULATOR
// ========================================

// Part 1: Personal Information
console.log("=== PERSONAL INFORMATION ===");

const fullName = "CodeKage";
const myAge = 20;
const birthYear = 2026 - age;
const city = "Bariga";
const student = true;
const favoriteHobby = "coding";

console.log(`Name: ${fullName}`);
console.log(`Age: ${myAge} (Born in ${birthYear})`);
console.log(`Location: ${city}`);
console.log(`Student Status: ${isStudent}`);
console.log(`Favorite Hobby: ${favoriteHobby}`);
console.log("");

// Part 2: Shopping Cart Calculator
console.log("=== SHOPPING CART ===");

const item1Price = 29.99;
const item1Quantity = 2;

const item2Price = 15.50;
const item2Quantity = 1;

const item3Price = 8.99;
const item3Quantity = 3;

const item1Total = item1Price * item1Quantity;
const item2Total = item2Price * item2Quantity;
const item3Total = item3Price * item3Quantity;

const subtotal = item1Total + item2Total + item3Total;
const taxRate = 0.08; // 8% tax
const taxAmount = subtotal * taxRate;
const total = subtotal + taxAmount;

console.log(`Item 1: $${item1Price} x ${item1Quantity} = $${item1Total}`);
console.log(`Item 2: $${item2Price} x ${item2Quantity} = $${item2Total}`);
console.log(`Item 3: $${item3Price} x ${item3Quantity} = $${item3Total}`);
console.log(`Subtotal: $${subtotal}`);
console.log(`Tax (8%): $${taxAmount}`);
console.log(`Total: $${total}`);
console.log("");

// Part 3: myAge Eligibility Checker
console.log("=== ELIGIBILITY CHECK ===");

const canVote = myAge >= 18;
const canDrink = myAge >= 21;
const canRentCar = myAge >= 25;
const isAdult = myAge >= 18;
const isTeenmyAger = myAge >= 13 && myAge < 20;

console.log(`Can vote: ${canVote}`);
console.log(`Can drink (US): ${canDrink}`);
console.log(`Can rent a car: ${canRentCar}`);
console.log(`Is adult: ${isAdult}`);
console.log(`Is teenager: ${isTeenager}`);
console.log("");

// Part 4: Data Type Inspector
console.log("=== DATA TYPE INSPECTOR ===");

let inspectName = fullName;
let inspectAge = myAge;
let inspectIsStudent = isStudent;
let inspectNothing = null;
let inspectUndefined;

console.log(`"${inspectName}" is type: ${typeof inspectName}`);
console.log(`${inspectAge} is type: ${typeof inspectAge}`);
console.log(`${inspectIsStudent} is type: ${typeof inspectIsStudent}`);
console.log(`${inspectNothing} is type: ${typeof inspectNothing}`);
console.log(`${inspectUndefined} is type: ${typeof inspectUndefined}`);
console.log("");

// Part 5: Fun Math
console.log("=== FUN MATH ===");

const num1 = 100;
const num2 = 7;

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2} (remainder)`);
console.log(`${num2} to the power of 3 = ${num2 ** 3}`);

console.log("=== PROJECT COMPLETE ===");
