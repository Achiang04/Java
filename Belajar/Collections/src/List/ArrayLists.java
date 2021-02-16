package List;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayLists {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        list.add("asep");
        list.add("ucup");
        list.add("mario");
        list.add("lala");
        list.add("bambang");
        list.remove("bambang");
        list.set(0, "otong");
        list.clear(); // kosong karena clear hapus semua
        Collections.sort(list);

        for(int i = 0; i < list.size(); i++){
            System.out.println(list.get(i));
        }

//        ArrayList<Integer>
        ArrayList<Double> prices = new ArrayList<Double>();
    }
}
