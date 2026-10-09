class Calculator {

    add(a, b) {
        if (b === undefined) {
            return a;
        }
        return a + b;
    }
}

let obj = new Calculator();

console.log(obj.add(10, 20));
console.log(obj.add(10));
