package JavatPoint.Interface;

public class MainBank {
    public static void main(String[] args) {
        Bank b = new SBI();
        System.out.println(b.rateOfInterest());
    }
}
