let paragraph: string = "java is easy and java is powerful";

let words = paragraph.split(" ");
let wordCount = new Map<string, number>();

for (let word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
}

console.log(wordCount);
