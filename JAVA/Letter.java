import java.io.*;
public class Letter {
    public static void main(String[] args) {

        String inputFile = "input.txt";
        String outputFile = "output.txt";

        int wordCount = 0;

        try {
            BufferedReader br = new BufferedReader(
                    new FileReader(inputFile));

            String line;

            while ((line = br.readLine()) != null) {

                String[] words = line.trim().split("\\s+");

                if (!line.trim().isEmpty()) {
                    wordCount += words.length;
                }
            }

            br.close();

            BufferedWriter bw = new BufferedWriter(
                    new FileWriter(outputFile));

            bw.write("Total number of words: " + wordCount);

            bw.close();

            System.out.println("Output written to " + outputFile);

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
