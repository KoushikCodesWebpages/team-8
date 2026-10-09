
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function makeApiCalls() {

    const url1 = await askQuestion("Enter API URL 1: ");
    const url2 = await askQuestion("Enter API URL 2: ");
    const url3 = await askQuestion("Enter API URL 3: ");

    try {

        console.log("\nCalling all APIs concurrently...\n");

        const [response1, response2, response3] = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3)
        ]);

        const [data1, data2, data3] = await Promise.all([
            response1.json(),
            response2.json(),
            response3.json()
        ]);

        console.log("API 1 Response:");
        console.log(data1);

        console.log("\nAPI 2 Response:");
        console.log(data2);

        console.log("\nAPI 3 Response:");
        console.log(data3);

    } catch (error) {
        console.log("Error while calling APIs:", error);
    }

    rl.close();
}

makeApiCalls();

