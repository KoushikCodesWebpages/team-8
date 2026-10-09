

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter minimum value: ", (minInput) => {

    rl.question("Enter maximum value: ", (maxInput) => {

        const min = Number(minInput);
        const max = Number(maxInput);

        if (min > max) {
            console.log("Minimum value cannot be greater than maximum value.");
        } else {

            const randomNumber =
                Math.floor(Math.random() * (max - min + 1)) + min;

            console.log("Random integer:", randomNumber);
        }

        rl.close();
    });
});

