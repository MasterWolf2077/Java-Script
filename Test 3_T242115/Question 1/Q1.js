function fizzBuzz(max, factor1, factor2) {
    //Prompt for missing arguments
    if (max === undefined) max = parseInt(prompt("Enter a positive integer for max:"));
    if (factor1 === undefined) factor1 = parseInt(prompt("Enter an integer greater than 1 for factor1:"));
    if (factor2 === undefined) factor2 = parseInt(prompt("Enter an integer greater than 1 for factor2:"));

    //Validate inputs
    if (
        isNaN(max) || isNaN(factor1) || isNaN(factor2) ||
        max <= 0 || !Number.isInteger(max) ||
        factor1 <= 1 || !Number.isInteger(factor1) ||
        factor2 <= 1 || !Number.isInteger(factor2)
    ) {
        alert("Invalid input. Please enter integers: max > 0, factor1 > 1, facctor2 > 1.");
        return fizzBuzz(); // Restart recurisvely
    }

    let fizzBuzzCount = 0;

    for (let i = 1; i <= max; i++) {
        const divisibleByFactor1 = i % factor1 === 0;
        const divisibleByFactor2 = i % factor2 === 0;

        if (divisibleByFactor1 && divisibleByFactor2) {
            console.log("FizzsBuzz");
            fizzBuzzCount++;
        } else if (divisibleByFactor1) {
            console.log("Fizz");
        } else if (divisibleByFactor2) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

    return fizzBuzzCount;
}