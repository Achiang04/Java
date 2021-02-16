package belajar;

import java.util.ArrayList;
import java.util.Collections;

public class CollectionsSort {
    public static void main(String[] args) {
        ArrayList<String> al = new ArrayList<String>();
        al.add("Geeks For Geeks");
        al.add("Friends");
        al.add("Dear");
        al.add("Is");
        al.add("Superb");
        Collections.sort(al);

        System.out.println("Ascending");
        System.out.println("List after the use of"
                + " Collection.sort() :\n" + al);

        System.out.println("\nDescending");
        Collections.sort(al, Collections.reverseOrder());
        System.out.println("List after the use of"
                + " Collection.sort() :\n" + al);
    }
}
