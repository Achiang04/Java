package JavatPoint.Abstract;

public abstract class Bike2 {
    Bike2() {
        System.out.println("bike is created");
    }
    abstract void run();
    void changeGear(){
        System.out.println("gear changed");
    }
}
