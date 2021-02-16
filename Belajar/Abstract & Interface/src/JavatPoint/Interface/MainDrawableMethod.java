package JavatPoint.Interface;

public class MainDrawableMethod {
    public static void main(String[] args) {
        DrawableMethod d = new RectangleMethod();
        d.draw();
        System.out.println(DrawableMethod.cube(3));
    }
}
