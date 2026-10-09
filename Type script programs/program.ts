import * as readline from "readline-sync";

class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    displayEmployee(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

class Manager extends Employee {
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    displayManager(): void {
        console.log("Department:", this.department);
    }
}

const employeeName: string = readline.question("Enter employee name: ").trim();

const employeeSalary: number = Number(
    readline.question("Enter employee salary: ")
);

const employeeDepartment: string = readline.question(
    "Enter department: "
).trim();

if (
    employeeName.length === 0 ||
    !Number.isFinite(employeeSalary) ||
    employeeSalary < 0 ||
    employeeDepartment.length === 0
) {
    console.log("Invalid input");
} else {

    const manager = new Manager(
        employeeName,
        employeeSalary,
        employeeDepartment
    );

    manager.displayEmployee();
    manager.displayManager();
}