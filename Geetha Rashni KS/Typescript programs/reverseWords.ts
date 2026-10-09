

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (sentence) => {

    const words = sentence.split(" ");

    const reversedWords = words.map((word) => {
        return word.split("").reverse().join("");
    });

    const result = reversedWords.join(" ");

    console.log("Original sentence:", sentence);
    console.log("Reversed sentence:", result);

    rl.close();
});

