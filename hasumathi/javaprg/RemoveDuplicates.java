import java.util.*;

public class RemoveDuplicates {
    public static void main(String[] args) {
     
        Set<Integer> set = new LinkedHashSet<>();
        
         int[] arr = {10, 20, 10, 30, 20, 40, 30};

        for (int num : arr) {
            set.add(num);
        }

        System.out.println("Array after removing duplicates: " + set);
    }
}
