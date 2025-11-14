function isIsogram(s) {
    //Step 1: convert to lowercase
    s = s.toLowerCase();

    //Step 2: remove non letter characters using regex
    let lettersOnly = s.replace(/[^a-z]/g, "");

    //Step 3: use set to track unqiue letters 
    let seen = new Set();
    for (let char of lettersOnly) {
        if (seen.has(char)) {
            return false; // duplicate found
        }
        seen.add(char);
    }

    //Step 4: if the loop completes, it's an isogram
    return true;
}

//Output
console.log(isIsogram("Machine"));
console.log(isIsogram("Hello world"));
console.log(isIsogram("Six-year-old"));
console.log(isIsogram("123!@#"));