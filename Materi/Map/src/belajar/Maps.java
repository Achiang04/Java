package belajar;

import java.util.HashMap;
import java.util.Map;

public class Maps {
    public static void main(String[] args) {
        Map<String, String[]> countryCities = new HashMap<String, String[]>();
        countryCities.put("England", new String[]{"London", "Liverpool", "Manchester", "Oxford"});
        countryCities.put("Germany", new String[]{"Berlin", "Munich"});
        countryCities.put("USA", new String[]{"Washington DC", "New York"});
        countryCities.put("Norway", new String[]{"Oslo", "Bergen", "Alesund"});

        for (String i : countryCities.keySet()) {
            System.out.print(i + " : ");
            for(String c : countryCities.get(i)) {
                System.out.print("|" + c + "|");
            }
            System.out.println();
        }
    }
}
