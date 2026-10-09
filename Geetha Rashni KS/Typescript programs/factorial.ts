
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {

    const number = Number(input);

    if (!Number.isInteger(number) || number < 0) {

        console.log("Please enter a non-negative integer.");

    } else {

        let factorial = 1;

        for (let i = 1; i <= number; i++) {
            factorial = factorial * i;
        }

        console.log("Factorial of", number, "is:", factorial);
    }

    rl.close();
});

