// && returns true only if BOTH sides are true

console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

// Real example: Can you vote?
let age = 18;
let isCitizen = true;

let canVot = age >= 18 && isCitizen;
console.log(canVot); // true (both conditions are met)

// || returns true if EITHER side is true (or both)

console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

// Real example: Is it a weekend?
let isSaturday = false;
let isSunday = true;

let isWeekend = isSaturday || isSunday;
console.log(isWeekend); // true (at least one is true)

// Another example: Can you get a discount?
let isStudent = false;
let isSenior = false;
let isMilitary = true;

let getsDiscount = isStudent || isSenior || isMilitary;
console.log(getsDiscount); // true (military qualifies)

// ! flips the boolean value

console.log(!true);   // false
console.log(!false);  // true

// Real example
let isRaining = true;
let isSunny = !isRaining;
console.log(isSunny); // false

// Double negative
let isOpen = true;
let isNotClosed = !(!isOpen);
console.log(isNotClosed); // true

// Useful for checking opposite conditions
let hasPermission = false;
let isRestricted = !hasPermission;
console.log(isRestricted); // true

// You can combine them!

let myAge = 25;
let hasTicket = true;
let hasID = true;

// Can enter the concert? (Must be 18+ AND have ticket AND have ID)
let canEnter = myAge >= 18 && hasTicket && hasID;
console.log(canEnter); // true

// Is it a special discount day? (Weekend OR holiday)
let isItWeekend = true;
let isHoliday = false;
let specialDiscountDay = isItWeekend || isHoliday;
console.log(specialDiscountDay); // true

// Complex example
let isMember = true;
let purchaseAmount = 45;
let hasPromoCode = false;

// Gets free shipping if: (member AND spend over $25) OR has promo code
let freeShipping = (isMember && purchaseAmount > 25) || hasPromoCode;
console.log(freeShipping); // true

// Exercise 4: Age verification system

// TODO: Create variables for:
const AGE = 16;
const hasParentPermission = true;
const hasId = false;

// TODO: Calculate these booleans:
// - canVote: must be 18 or older
// - canDrive: must be 16 or older AND have ID
// - canWatchRatedRMovie: must be 17 or older OR have parent permission
// - isTeenager: must be 13 or older AND less than 20

// TODO: Log each result with a descriptive message

// Write your code below:

const canVote = AGE >= 18
const canDrive = AGE >= 16 && !hasId
const canWatchRatedRMovie = age >= 17 || hasParentPermission
const isTeenager = AGE >= 13 && AGE < 20

console.log(`
    Age: ${AGE}
    hasParentPermission: ${hasParentPermission}
    hasId: ${hasId}
    Can Vote: ${canVote}
    Can Drive: ${canDrive}
    Can watch rated movie: ${canWatchRatedRMovie}
    is a teenager: ${isTeenager}
`)
