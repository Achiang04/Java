package belajar;

import belajar.HelloWorld;

public class HelloWorldApp {
    public static void main(String[] args) {

        // not reusable
        // hanya untuk kasus sederhana aja

        HelloWorld english = new HelloWorld(){

            public void sayHello() {
                System.out.println("Hello");
            }

            public void sayHello(String name) {
                System.out.println("Hello " + name);
            }
        };

        HelloWorld indonesia = new HelloWorld(){

            public void sayHello() {
                System.out.println("Halo");
            }

            public void sayHello(String name) {
                System.out.println("Halo " + name);
            }
        };

        english.sayHello();
        english.sayHello("Asep");

        indonesia.sayHello();
        indonesia.sayHello("Asep");

    }
}