package ProgrammerZamanNow.application;

import ProgrammerZamanNow.data.Avanza;
import ProgrammerZamanNow.data.Car;

public class CarApp {
    public static void main(String[] args) {

        Car car = new Avanza();
        System.out.println(car.getTier());
        car.drive();

    }
}
