// 1. Define a function called greet(name) 
function greet(name) {
    return "Hello, " + name + "!";
}

// 2. Define the welcome function 
function welcomeUser(func, userName) {
    return func(userName);
}

// 3. Calls welcomeUser using greeet and print result
const message = greet("Alice");
console.log(message);