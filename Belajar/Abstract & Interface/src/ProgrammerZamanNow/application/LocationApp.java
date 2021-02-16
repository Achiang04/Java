package ProgrammerZamanNow.application;

import ProgrammerZamanNow.data.City;

public class LocationApp {
    public static void main(String[] args) {
//        var location = new Location(); // ERROR, karena ga bisa buat object dari class yang abstract
        var city = new City();
        city.name = "dumai";
        System.out.println(city.name);
    }
}
