function isPangram(s) {
    //convert to lower case  to ignore case sensitivity
    s = s.toLowerCase();

    // ignore non letter characters using regex
    let letters = s.replace(/[^a-z]/g, "");

    // track unique letters
    let uniqueLetters = new Set();
    
    for (let char of letters) {
        if (uniqueLetters.size === 26) {
            return true; // all letters found
        } else {
            if (!uniqueLetters.has(char)) {
                uniqueLetters.add(char);
                return false;
            }
        } 
    } 

    return uniqueLetters.size === 26;
}

//Output
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Hello world"));
console.log(isPangram("Pack my box with five dozen liquor jugs!"));