package belajar;

class A {
    String a;

    protected A(String a) {
        this.a = a;
    }

    //    kalau buat method dengan protected itu harus di inherit dulu ke class lain
    protected void msg() {
        System.out.println("test");
    }

}

