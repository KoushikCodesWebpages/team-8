import * as readline from "readline-sync";

let n: number = Number(
    readline.question("Enter the number of elements: ")
);

if (!Number.isInteger(n) || n <= 0) {

    console.log("Invalid number of elements");

} else {

    let sum: number = 0;
    let valid: boolean = true;

    for (let i = 0; i < n; i++) {

        let value: number = Number(
            readline.question("Enter element: ")
        );

        if (!Number.isFinite(value)) {
            valid = false;
        } else {
            sum += value;
        }
    }

    if (!valid) {

        console.log("Invalid input");

    } else {

        let average: number = sum / n;

        console.log("Average:", average);
    }
}
