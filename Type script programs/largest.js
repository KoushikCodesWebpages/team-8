import * as readline from "readline-sync";
let a = Number(readline.question("Enter first number: "));
let b = Number(readline.question("Enter second number: "));
let c = Number(readline.question("Enter third number: "));
if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    console.log("Invalid input");
}
else {
    let largest;
    if (a >= b && a >= c) {
        largest = a;
    }
    else if (b >= a && b >= c) {
        largest = b;
    }
    else {
        largest = c;
    }
    console.log("Largest:", largest);
}
