//1. Create a function expression
const calculateTotal = function(price, taxRate) {
    return price + (price * taxRate / 100);
}

//2. Call function with different values and printing the result
console.log(calculateTotal(100, 15)); //115
console.log(calculateTotal(250, 10)); //275

