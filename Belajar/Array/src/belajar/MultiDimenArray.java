package belajar;

public class MultiDimenArray {
    public static void main(String[] args) {
        int arr[][] = {{1, 2, 3}, {2, 4, 5}, {4, 4, 5}};
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("===========");

        int[][] a = {
                {1, -2, 3},
                {-4, -5, 6, 9},
                {7},
        };

        for (int i = 0; i < a.length; ++i) {
            for (int j = 0; j < a[i].length; ++j) {
                System.out.println(a[i][j]);
            }
        }
        System.out.println("\nfor each\n");
        for (int[] innerArray : a) {
            for (int data : innerArray) {
                System.out.println(data);
            }
        }
    }
}
