package JavatPoint.Interface;

public class PrintShow implements Printable, Showable{
    public void print(){
        System.out.println("hello");
    }

    public void show(){
        System.out.println("welcome");
    }

    public static void main(String[] args) {
        PrintShow printShow = new PrintShow();
        printShow.print();
    }
}
