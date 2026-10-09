const readline = require("readline-sync");

let n = Number(readline.question("Enter the number of elements: "));

if (!Number.isFinite(n) || n < 0) {
    console.log("Maximum: 0");
    process.exit(0);
}

let arr = [];

for (let i = 0; i < n; i++) {
    let value = Number(readline.question("Enter element: "));

    if (Number.isFinite(value)) {
        arr.push(value);
    }
}

if (arr.length === 0) {
    console.log("Maximum: 0");
    process.exit(0);
}

let maximum = Math.max(...arr);

console.log("Maximum:", maximum);
