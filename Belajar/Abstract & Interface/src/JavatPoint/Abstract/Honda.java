package JavatPoint.Abstract;

public class Honda extends Bike{
    void run() {
        System.out.println("running safely");
    }

    public static void main(String[] args) {
        Bike obj = new Honda();
        obj.run();
    }
}
