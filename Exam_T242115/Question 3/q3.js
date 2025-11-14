function mergeArrays(arr1, arr2) {
    // Step 1: comine the two arrays
    let newArray = arr1.concat(arr2);

    //Step 2: remove duplicate values
    let uniqueArray = [];
    for (let num of newArray) {
        if (!uniqueArray.includes(num)) {
            uniqueArray.push(num);
        }
    }

    //Step 3: sort array in ascending order
    uniqueArray.sort((a, b) => a - b);

    return uniqueArray;
}

//Output
console.log(mergeArrays([1, 2, 4], [1, 3, 4]));
console.log(mergeArrays([0, 0, 1, 2, 3], [2, 3, 4, 4, 5]));