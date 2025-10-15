//Create vairables and show their values and types
// Using literals
let isTrue = true;                  // Boolean
let age = 25;                       // Number
let bigNum = 12345678901234567890n; // BigInt
let name = "Miche";                // String
let notDefined;                    // Undefined

// Using constructor functions
let boolVal = Boolean(false);
let numVal = Number(3.14);
let bigVal = BigInt(1000);
let strVal = String("Hello");
let undefVal = undefined; // no constructor for undefined

//Convert between types
// Start with a string
let str = "1234";

// Convert string to a number
let num = Number(str);

// Convert number to a BigInt
let big = BigInt(num);

// Convert BigInt to a boolean
let bool = Boolean(big);

// Print the result
console.log(bool);           // true
console.log(typeof bool);    // boolean

//Add teo values of same type
console.log(5 + 10);         // Number + Number = 15 (number)
console.log("Hi" + "There"); // String + String = "HiThere" (string)
console.log(5n + 10n);       // BigInt + BigInt = 15n (bigint)
console.log(true + true);    // Boolean + Boolean = 2 (number, because true=1)

//Add two vaules of different types
console.log(5 + "5");     // number + string → "55" (string)
console.log("5" + 5n);    // string + bigint → "55" (string)
console.log(true + "5");  // boolean + string → "true5" (string)
console.log(5 + true);    // number + boolean → 6 (number)

//Modify line to get 43 instead of 421
const str1 = 42 + "1";
console.log(str1); // "421"

const str2 = 42 + +"1"; // + before "1" turns it into a number
console.log(str1); // 43




