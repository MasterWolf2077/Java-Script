//6. Day of the Week
//Ask user for numbers between 1 and 7
let input = prompt("Enter a number bewteen 1 and 7:");
let dayNumber = Number(input);

//Determine the day of the week
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input. Please enter a number between 1 and 7.");
}

//7. Simple Calculator
//Ask user for two numbers and an operator
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");

//The calculation
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 *  num2;
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero";
        }
        break;
        deafult:
        result = "Invalid operator";
}

console.log("Result: ", result);

//8. Month Name
//Ask user for a month number (1-12)
let input1 = prompt("Enter a month number (1-12):");
let monthNumber = Number(input1);

// Determine the month name
switch (monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid input. Please enter a number from 1 to 12.");
}

//9. Traffic Light System
// Ask the user for a traffic light color
let color = prompt("Enter a traffic light color (red, yellow, green):");

// Normalize input to lowercase for consistency
color = color.toLowerCase();

// Determine the action based on the color
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color. Please enter red, yellow, or green.");
}

//10. Vowel or Consonant
// Ask the user for a single letter
let letter = prompt("Enter a single letter:");

// Normalize input to lowercase
letter = letter.toLowerCase();

// Check if it's a vowel or consonant
switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    // Check if it's a valid alphabet character
    if (letter.length === 1 && letter >= "a" && letter <= "z") {
      console.log("Consonant");
    } else {
      console.log("Invalid input. Please enter a single alphabet letter.");
    }
}