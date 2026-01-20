let name = "  CodeKage"


switch (name.trim().slice(0, 1)) {
    case "A":
        console.log("Audio devs")
    break;

    case "C":
        console.log("Capable devs")
    break;

    default:
        console.log("Mf ain't got a name")
    break;
}

// Exercise 5: Switch practice

// Part 1: Day Type Checker
const dayNumber = 3; // 1=Monday, 2=Tuesday, etc.

// TODO: Use switch to:
// - 1-5: "Weekday"
// - 6-7: "Weekend"
// - default: "Invalid day"

switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday")
        break;
    case 6:
    case 7:
        console.log("Weekend")
        break;

    default:
        console.log("Ivalid day")
        break;
}


// Part 2: Season Checker
const month = 7; // 1=Jan, 2=Feb, etc.

// TODO: Use switch to determine season:
// - 12, 1, 2: "Winter"
// - 3, 4, 5: "Spring"
// - 6, 7, 8: "Summer"
// - 9, 10, 11: "Fall"
// - default: "Invalid month"

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter")
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer")
        break;
    case 9:
    case 10:
    case 11:
        console.log("Fall")
        break;

    default:
        console.log("Ivalid month")
        break;
}
