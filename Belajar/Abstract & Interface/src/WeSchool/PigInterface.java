package WeSchool;

public class PigInterface implements AnimalInterface {
    public void animalSound(){
        System.out.println("the pig says: wee wee");
    }
    public void sleep(){
        System.out.println("zzzz");
    }
}
