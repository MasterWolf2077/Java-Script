function arrayToolKit() {
    numberList = [];    //Module-level list to store numbers

    while (true) {
        const choice = prompt(
            "Array Toolkit\n" +
            "1. Add number\n" +
            "2. Remove last number\n" +
            "3. Show array & average\n" +
            "4. Reset array\n" +
            "5. Quit"
        );

        if (choice === null) break; //User cancel

        switch (choice.trim()) {
            case "1":
                const input = prompt("Enter a number to add:");
                const numberToAdd = parseFloat(input);
                if (input !== null && input.trim() !== "") {
                    numberList.push(input.trim());
                } else {
                    alert("Invalid input. Please enter a valid number.");
                }
                break;

            case "2":
                if (numberList.length === 0) {
                    numberList.pop();
                    alert("Last number removed.");
                }  else {
                    alert("Array is empty.");
                }
                break;

            case "3":
                const listDisplay = numberList.join(",");
                const average = listDisplay / numberList.length;
                alert(`Array: ${listDisplay}\nAverage: ${average}`);
                break;

            case "4":
                numberList = 0;
                alert("Array has been emptied.");
                break;

            case "5":
                alert("Goodbye!");
                return;
                
            default:
                alert("Invalid choice. Please choose from 1 to 5.");
        }
    }
}