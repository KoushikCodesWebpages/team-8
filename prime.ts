function isPrime(n: number): boolean {

    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

let num = 17;

if (isPrime(num)) {
    console.log(num + " is Prime");
} else {
    console.log(num + " is Not Prime");
}