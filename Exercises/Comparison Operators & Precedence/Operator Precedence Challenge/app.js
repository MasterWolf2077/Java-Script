let result = 10 + 5 * 2 > 25 - 3 && 8 < 16 || false;
// Evaluates as:
// ((10 + (5 * 2)) > (25 - 3)) && (8 < 16) || false
// ((10 + 10) > 22) && true || false
// (20 > 22) && true || false
// false && true || false
// false || false → false

console.log(result); // false