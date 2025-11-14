function intersection(arr1, arr2) {
    //Step 1: convert both arrays to sets
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    //Step 2: find common elements
    let result = [];
    for (let num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    //Step 3: sortin ascending order
    result.sort((a, b) => a - b);

    return result;
}

//Output
console.log(intersection([1, 2, 4, 5], [1, 3, 4]));
console.log(intersection([0, 0, 1, 2, 3], [2, 3, 4, 4, 5]));
console.log(intersection([10, 20, 30], [30, 40, 50]));
console.log(intersection([1, 1, 1], [1]));