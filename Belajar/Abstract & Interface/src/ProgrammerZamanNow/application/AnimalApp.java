package ProgrammerZamanNow.application;

import ProgrammerZamanNow.data.Animal;
import ProgrammerZamanNow.data.Cat;

public class AnimalApp {
    public static void main(String[] args) {
        Animal animal = new Cat();
        animal.name = "puss";
        animal.run();
    }
}
