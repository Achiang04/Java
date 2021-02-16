package belajar;

public class CloningArray {
    public static void main(String[] args) {
        int arr[] = {33, 3, 4, 5};
        System.out.println("Printing original array : ");
        for (int i : arr) {
            System.out.println(i);
        }

        System.out.println("printing clone of the array");
        int carr[] = arr.clone();
        for (int i : carr) {
            System.out.println(i);
        }

        System.out.println("are both equal ? ");
        System.out.println(arr == carr);
    }
}
