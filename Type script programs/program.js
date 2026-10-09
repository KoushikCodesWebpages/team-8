import * as readline from "readline-sync";
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    displayEmployee() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}
class Manager extends Employee {
    department;
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    displayManager() {
        console.log("Department:", this.department);
    }
}
const employeeName = readline.question("Enter employee name: ").trim();
const employeeSalary = Number(readline.question("Enter employee salary: "));
const employeeDepartment = readline.question("Enter department: ").trim();
if (employeeName.length === 0 ||
    !Number.isFinite(employeeSalary) ||
    employeeSalary < 0 ||
    employeeDepartment.length === 0) {
    console.log("Invalid input");
}
else {
    const manager = new Manager(employeeName, employeeSalary, employeeDepartment);
    manager.displayEmployee();
    manager.displayManager();
}
