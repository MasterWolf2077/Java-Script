function isValidStructure(s) {
    let stack = [];     // to track opening brackets

    for (let char of s) {
        if (char === "<") {
            //push opening bracket
            stack.push("<");
        } else if (char === ">") {
            //must match previous <
            if (stack.length === 0) {
                return false; //unmatched closing bracket
            }
            stack.pop();
        } else if (char === "1" || char === "2" || char === "3") {
            //digits must be inside brackets
            if (stack === 0) {
                return false; //digit outside brackets
            }
        } else {
            //Invalid character
            return false;
        }
    }

    //valid only if all brackets matches
    return stack.length === 0;
}

//Output
console.log(isValidStructure("<\>"));
console.log(isValidStructure("<12><3>"));
console.log(isValidStructure("1<2>"));
console.log(isValidStructure("<<1>2>"));
console.log(isValidStructure("<>"));
console.log(isValidStructure("<<>"));