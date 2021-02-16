package belajar;

public class Main {
    public static void main(String[] args) {
        Person person1 = new Person("fathan");
        person1.sayHello("mahendra");

        person1 = new Student("fakhrul");
        person1.sayHello("fathan");

        Student std = new Student("mahendra");
        std.sayHello("sjsjsj");

        sayHello(new Person("fathan"));
        sayHello(new Student("mahendra"));

        Kotak box = new Kotak();
        System.out.println(box.tambah(1));
        System.out.println(box.tambah(1, 2));
        System.out.println(box.tambah("hallo "));
    }

    static void sayHello(Person person) {
        System.out.println("hy " + person.name);
    }
}

class Person {
    String name;

    public Person(String name) {
        this.name = name;
    }

    void sayHello(String name) {
        System.out.println("Hi person "+ name + " my name is " + this.name);
    }
}

class Student extends Person {
    public Student(String name) {
        super(name);
    }

    // method override
    void sayHello(String name) {
        System.out.println("Hi student "+ name + " my name is " + this.name);
    }

}

// contoh method overloading
class Kotak {
    int tambah(int a) {
        return 0;
    }

    int tambah(int a, int b) {
        return a + b;
    }

    String tambah(String name) {
        return name;
    }
}