package belajar;

import java.util.Arrays;
import java.util.Collections;

public class SortingArray {
    public static void main(String[] args) {
        {
            int[] arr1 = {13, 7, 6, 45, 21, 9, 101, 102};

            System.out.println("Ascending");
            Arrays.sort(arr1);
            System.out.printf("Modified arr[] : %s",
                    Arrays.toString(arr1));


            Integer[] arr2 = {13, 7, 6, 45, 21, 9, 101, 102};
            System.out.println("\n\nDescending");
            Arrays.sort(arr2, Collections.reverseOrder());
            System.out.printf("Modified arr[] : %s",
                    Arrays.toString(arr2));

            System.out.println("\n\nSub Array Sorting");
            int[] arr3 = { 13, 7, 6, 45, 21, 9, 2, 100 };
            Arrays.sort(arr3, 1, 5);
            System.out.printf("Modified arr[] : %s",
                    Arrays.toString(arr3));
        }
    }
}
