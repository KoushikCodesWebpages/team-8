"use strict";
function countOccurrences(arr, target) {
    let count = 0;
    for (let num of arr) {
        if (num === target) {
            count++;
        }
    }
    return count;
}
let arr = [1, 2, 3, 2, 4, 2, 5];
let target = 2;
console.log("Count:", countOccurrences(arr, target));
