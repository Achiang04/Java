package belajar;

public class Example {
    public static void main(String[] args) {
        int a[] = new int[5];
        a[0] = 10;
        a[1] = 20;
        a[2] = 70;
        a[3] = 40;
        a[4] = 50;
        for (int i = 0; i < a.length; i++) {
            System.out.println(a[i]);
        }

        System.out.println("=============");

        int b[] = {33, 3, 4, 5};
        for (int i = 0; i < b.length; i++) {
            System.out.println(b[i]);
        }
        System.out.println("\nfor each\n");
        for (int i : b) {
            System.out.println(i);
        }

        System.out.println("=============");

        String[] str = new String[]{"one", "two", "three", "four"};
        System.out.println("These are elements of one Dimensional array.");
        for (int i = 0; i < str.length; i++) {
            System.err.println(str[i] + "   ");
        }
        System.out.println("\nfor each\n");
        for (String i : str) {
            System.out.println(i);
        }
    }
}
