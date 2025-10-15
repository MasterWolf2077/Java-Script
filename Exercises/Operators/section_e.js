// Non-Boolean Logical Values
//Falsey Behavior
let user = "";
let displayName = user || "Guest User";
console.log("Welcome, " + displayName);

//Truthy Behavior
user = "Miche";
displayName = user || "Guest User";
console.log("Welcome, " + displayName);