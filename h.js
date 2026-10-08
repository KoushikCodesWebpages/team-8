"use strict";
class Developer {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Role: Developer");
    }
}
class Tester {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
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
