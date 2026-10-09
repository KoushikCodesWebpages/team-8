import java.util.Scanner;

public class Stack{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        if (n <= 0) {
            System.out.println("Stack size must be greater than 0");
            sc.close();
            return;
        }

        int[] stack = new int[n];
        int top = -1;

        for (int i = 0; i < n; i++) {
            int value = sc.nextInt();
            
            if (top == n - 1) {
                System.out.println("Stack Overflow");
                sc.close();
                return;
            }
            stack[++top] = value;
        }

        if (top >= 0) {
            System.out.println("Top element: " + stack[top]);
        } else {
            System.out.println("Stack is empty");
        }


        if (top >= 0) {
            System.out.println("Popped: " + stack[top]);
            top--;
        } else {
            System.out.println("Stack Underflow");
        }

        if (top >= 0) {
            System.out.println("Stack after pop:");
            for (int i = top; i >= 0; i--) {
                System.out.println(stack[i]);
            }
        } else {
            System.out.println("Stack is empty after pop");
        }

        sc.close();
    }
}
