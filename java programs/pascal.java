import java.util.Scanner;

public class pascal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        if (n <= 0) {
            System.out.println("Number of rows must be greater than 0");
        } 
        else {
            for (int i = 0; i < n; i++) {
                int value = 1;

                for (int j = 0; j <= i; j++) {
                    System.out.print(value + " ");
        
                    value = value * (i - j) / (j + 1);
                }
                System.out.println();
            }
        }

        sc.close();
    }
}
