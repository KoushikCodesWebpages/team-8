let words = [
    "apple",
    "banana",
    "ant",
    "ball",
    "cat",
    "car"
];

let grouped = new Map();

for (let word of words) {

    let firstChar = word.charAt(0);

    if (!grouped.has(firstChar)) {
        grouped.set(firstChar, []);
    }

    grouped.get(firstChar).push(word);
}

console.log(grouped);