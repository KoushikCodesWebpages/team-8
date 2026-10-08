function countOccurrences(arr: number[], target: number): number {

    let count = 0;

    for (let num of arr) {
        if (num === target) {
            count++;
        }
    }

    return count;
}

let arr: number[] = [1, 2, 3, 2, 4, 2, 5];

let target = 2;

console.log("Count:", countOccurrences(arr, target));