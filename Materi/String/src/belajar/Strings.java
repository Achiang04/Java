package belajar;

public class Strings {
    public static void main(String[] args) {
        String strObj1 = new String("java");
        String strObj2 = new String("java");
        if (strObj1.equals(strObj2)) {
            System.out.println("object");
        }

        String strLit1 = "java";
        String strLit2 = "java";
        if (strLit1.equals(strLit2)) {
            System.out.println("literal");
        }

        String strObj3 = new String();
        System.out.println(strObj3);

        // ini ga akan bisa di concat karena string itu immutable
        String str = "java string";
        str.concat(" belajar"); // java string belajar
        System.out.println(str);

        // cara untuk akali supaya bisa di concat
        str = str.concat(" belajar");
        System.out.println(str);
        String[] arrayOfStr = str.split(" ");
        System.out.println(arrayOfStr[0]);

        // ======

        StringBuffer sb = new StringBuffer("hallo");
        System.out.println(sb);
        sb.append(" nama saya");
        // ["hallo", "nama saya", "fathan"]
        // "hallo nama saya fathan"
        System.out.println(sb);
        System.out.println(sb.capacity());
        System.out.println(sb.reverse());
    }
}
