let numbers = [10, 40, 0, 20, 50];
//Task 1
function div(a, b) {
    if (b == 0) {
        throw new RangeError("Can't divide by 0");
    }
    return a / b;
}
console.log(div(4, 2)); // -> 2

try {
    console.log(div(4, 0));
} catch (e) {
    console.log(e.RangeError); // -> Can't divide by 0
}
/////////////////////////////////////////////////

//Task 2
for (let i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = div(1000, numbers[i]);
    } catch (e) {
        result = e.message;
    }
    console.log(result);
}