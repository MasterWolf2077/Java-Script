//1. Even or Odd
//Ask user to enter a number
let userInput = prompt("Enter a number:");

//Covert input to number
let number = Number(userInput);

//Check if number is even or odd
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//2. Grade Checker
//Ask user for a percentage
let input = prompt("Enter your percentage:");

//Convert input to a number
let percentage = Number(input);

//Check and display the grade
if (percentage >= 80 && percentage <= 100) {
    console.log("Grade: A");
} else if (percentage >= 70 && percentage <= 79) {
    console.log("Grade: B");
} else if (percentage >= 60 && percentage <= 69) {
    console.log("Grade: C");
} else if (percentage >= 50 && percentage <= 59) {
    console.log("Grade: D");
} else if (percentage >= 0 && percentage <=50) {
    console.log("Grade: Fail");
} else {
    console.log("Invalid input. Please enter a number between 0 and 100.");
}

//3. Largest of Three Numbers
//Ask user for three numbers
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

//Check for largest number
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log("The largest number is: ", largest);

//4. login Validation
//Ask user for username and password
let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

//Check if username and password are correct
if (username === "admin" && password === "1234") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

//5. Leap Year Checker
//Ask user for input
let input1 = prompt("Enter a year:");
let year = Number(input1);

//Checking if its a leap year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a leap year.");
} else {
    console.log(year, "is not a leap year.");
}