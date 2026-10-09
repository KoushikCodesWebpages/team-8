const readline = require("readline-sync");

const sentence = readline.question("Enter a sentence: ").trim();

if (sentence.length === 0) {
    console.log("No sentence entered");
    process.exit(0);
}

let words = sentence.split(/\s+/);

let result = words.map(function(word) {

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

});

console.log("Result:", result.join(" "));