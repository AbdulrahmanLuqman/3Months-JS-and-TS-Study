/*
**Try These Yourself!** Create `leetcode-day1.js` and solve both problems.

---

## 📝 HOMEWORK - DO THIS BEFORE TOMORROW!

### 1. Code Challenges

**Challenge 1: Movie Ticket Pricer**
Create `homework-challenge1.js`:
- Adult ticket: $15
- Child ticket (under 12): $8
- Senior ticket (65+): $10
- Variables: age, numberOfTickets
- Calculate: total price
- Determine: what type of ticket they get
*/
const adultTicket = 15
const childTicket = 8
const seniorTicket = 10

const age = 20
const amountPerTicket = adultTicket
const numberOfTickets = 3
const totalPrice = amountPerTicket * numberOfTickets

// console.log(`your ticket fee is $${totalPrice}`)
/*

**Challenge 2: Grade Calculator**
Create `homework-challenge2.js`:
- Variables: test1, test2, test3 (scores out of 100)
- Calculate: average score
- Determine: 
  - Is passing (average >= 60)
  - Is excellent (average >= 90)
  - Is honors (average >= 85)

  */
    const test1 = 80
    const test2 = 64
    const test3 = 58

    const averageScore = (test1 + test2 + test3) / 3

    const isPassing = averageScore >= 60
    const isExcellent = averageScore >= 90
    const isHonors = averageScore >= 85

    // console.log({isPassing, isExcellent, isHonors, averageScore})
  /*

**Challenge 3: Password Validator**
Create `homework-challenge3.js`:
- Variables: password (string), confirmPassword (string), minimumLength (number)
- Check:
  - Passwords match
  - Password is long enough
  - Password is not empty
  - All checks pass = valid

  */
  const password = "jsnkdhkjlf"
  const confirmPassword = password
  const minimumLength = 6

  console.log(password === confirmPassword)
  /*

### 2. Experimentation

Create `experiments.js` and try to break things:
- What happens if you add a string and a number?
- What happens if you divide by zero?
- What happens if you use a variable before declaring it?
- What's `typeof` of different values?

Write down what you discover!

### 3. Review

Before tomorrow, make sure you can answer:
1. What's the difference between `let` and `const`?
2. What are the 7 primitive data types?
3. What's the difference between `===` and `==`?
4. What does `&&` mean? What does `||` mean?
5. What's the difference between `null` and `undefined`?

*/