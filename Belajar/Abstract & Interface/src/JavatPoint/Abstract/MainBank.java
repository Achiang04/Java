package JavatPoint.Abstract;

public class MainBank {
    public static void main(String[] args) {
        Bank b;
        b = new SBI();
        System.out.println(b.getRateOfInterest());
        b = new PNB();
        System.out.println(b.getRateOfInterest());
    }
}
