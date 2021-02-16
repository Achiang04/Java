package belajar;

public class C extends A{
    C(String a){
        super(a);
    }

//    kalau mau overriding method protected keknya harus nambahin protected atau public kalau ga dia compile time error
    protected void msg() {
        System.out.println("test lagi");
    }

    public static void main(String[] args) {
        C obj = new C("bambang");
        obj.msg();
    }
}
