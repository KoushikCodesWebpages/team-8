let str: string = "hasu";

let reversed: string = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
