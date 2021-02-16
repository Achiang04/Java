package belajar;

// get the minimum number

public class PassingArrayMethod {
    static void min(int arr[]) {
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
                System.out.println(min);
            }
        }
    }

    public static void main(String argsp[]) {
        int a[] = {33, 3, 4, 5};
        min(a);
    }
}
