
import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ArrayList<String> items = new ArrayList<>();

        System.out.print("How many elements do you want to add? ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter element " + (i + 1) + ": ");
            items.add(sc.nextLine());
        }

        System.out.println("\nCurrent ArrayList: " + items);

        System.out.print("Enter an element to add: ");
        String addElement = sc.nextLine();
        items.add(addElement);

        System.out.println("After adding: " + items);

        System.out.print("Enter an element to remove: ");
        String removeElement = sc.nextLine();

        if (items.remove(removeElement)) {
            System.out.println("Element removed successfully.");
        } else {
            System.out.println("Element not found.");
        }

        System.out.println("After removing: " + items);

        System.out.print("Enter an element to search: ");
        String searchElement = sc.nextLine();

        if (items.contains(searchElement)) {
            System.out.println("Element found in the ArrayList.");
        } else {
            System.out.println("Element not found in the ArrayList.");
        }

        sc.close();
    }
}

