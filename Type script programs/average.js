import * as readline from "readline-sync";
let n = Number(readline.question("Enter the number of elements: "));
if (!Number.isInteger(n) || n <= 0) {
    console.log("Invalid number of elements");
}
else {
    let sum = 0;
    let valid = true;
    for (let i = 0; i < n; i++) {
        let value = Number(readline.question("Enter element: "));
        if (!Number.isFinite(value)) {
            valid = false;
        }
        else {
            sum += value;
        }
    }
    if (!valid) {
        console.log("Invalid input");
    }
    else {
        let average = sum / n;
        console.log("Average:", average);
    }
}
