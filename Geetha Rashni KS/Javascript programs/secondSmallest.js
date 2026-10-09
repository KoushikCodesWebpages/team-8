

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array elements separated by spaces: ", (input) => {

    const numbers = input.split(" ").map(Number);

    // Remove duplicate values
    const uniqueNumbers = [...new Set(numbers)];

    if (uniqueNumbers.length < 2) {
        console.log("Array must contain at least two different elements.");
    } else {

        uniqueNumbers.sort((a, b) => a - b);

        console.log("Second-smallest element:", uniqueNumbers[1]);
    }

    rl.close();
});

