//Task 1 (A)
let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => a - b);
console.log(sorted); // [10, 20, 30, 40, 50]
//////////////////////////////////////////
//Task 1 (B)
let numbers1 = [50, 10, 40, 30, 20];
let sorted1 = numbers1.sort((a, b) => b - a);
console.log(sorted1); // [50, 40,30, 20, 10]
///////////////////////////////////////////
//Task 2
function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // ->NaN
/////////////////////////////////////////////////////
//Task 3
let add1 = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub1 = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult1 = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10,1)); // ->NaN
/////////////////////////////////////////////////////
//Task 4
let action1 = (callback, a, b) => callback(a, b);
// or
let action_1 = function (callback, a, b) {
    return callback(a, b);
}
// or
function action(callback, a, b) {
    return callback(a, b);
}

console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
/////////////////////////////////////////////////////
//Task 5
let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);
////////////////////////////////////////////////////
//Task 6
let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13
///////////////////////////////////////////////////////
//Task 7
let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));
console.log(fibb(4)); // -> 3
//////////////////////////////////////////////////
//Task 8
function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;
    }
    return b;
}
