//Ask user for input
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

//Compares the numbers
if (num1 === num2) {
    console.log("Equal");
}else if (num1 == num2) {
    console.log("Same value but different type");
}else {
    console.log("Different");
}