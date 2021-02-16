package JavatPoint.Interface;

public class A4 implements Printable {
    public void print() {
        System.out.println("hello");
    }

    public static void main(String[] args) {
        A4 a4 = new A4();
        a4.print();
    }
}
