import java.util.*;

public class MostFrequentCharacter {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String str=sc.nextLine();
        HashMap<Character, Integer> map = new HashMap<>();

         for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        char mostFrequent = ' ';
        int maxCount = 0;

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }

        System.out.println("Most frequent character: " + mostFrequent);
        System.out.println("Frequency: " + maxCount);
    }
}


