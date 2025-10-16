let x = 5, y = 10, z = "5";

console.log("1. x == z:", x == z);           // true (loose equality, type coercion)
console.log("2. x === z:", x === z);         // false (strict equality, different types)
console.log("3. (x < y) && (x == z):", (x < y) && (x == z)); // true && true → true
console.log("4. (x > y) || (x === 5):", (x > y) || (x === 5)); // false || true → true
console.log("5. !(x === z):", !(x === z));   // !(false) → true