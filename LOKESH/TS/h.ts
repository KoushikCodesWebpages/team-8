interface Employee {
    name: string;
    salary: number;

    displayDetails(): void;
}

class Developer implements Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Role: Developer");
    }
}

class Tester implements Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Role: Tester");
    }
}

let emp1 = new Developer("Lokesh", 60000);
let emp2 = new Tester("Rahul", 50000);

emp1.displayDetails();

console.log("----------------");

emp2.displayDetails();
