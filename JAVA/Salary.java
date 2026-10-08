import java.util.*;
import java.util.stream.*;

class Employee {
    String name;
    int age;
    double salary;

    Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return name + " - Age: " + age + " - Salary: " + salary;
    }
}

public class Salary {
    public static void main(String[] args) {

        List<Employee> employees = Arrays.asList(
            new Employee("Lokesh", 22, 45000),
            new Employee("Rahul", 28, 60000),
            new Employee("Arun", 30, 75000),
            new Employee("Karthik", 24, 55000)
        );

        List<Employee> result = employees.stream()
                .filter(e -> e.age > 25)
                .filter(e -> e.salary > 50000)
                .collect(Collectors.toList());

        result.forEach(System.out::println);
    }
}
