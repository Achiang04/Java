package belajar;

public class Main {
    public static void main(String[] args) {

        Child child = new Child();
        child.name = "Eko";
        child.doIt();
        System.out.println(child.name);

//        Parent parent = child; // sebenarnya bisa langsung kek gini tanpa harus di cast lagi karena child inherit dari parentnya
//        ini bisa dibaca kayak tipe data Parent tapi object nya child makannya doItnya akan tetap manggil yang child bukan yang parentnya
        Parent parent =  (Parent) child;
        parent.doIt();
//        ga ada namanya istilah variable overriding, jadi ketika kasus kek gini dia akan null karena yang ada diatas dia cuman inisialisasi ke
//        child ga ada ke parent nya makannya dia null (efek null juga datang dari tipe data primitif)
//        sifatnya tuh sendiri sendiri (terpisah)
//        ini di sebut juga variable hiding
//        tapi kasusnya juga ga ada kek gini sih karena biasanya cukup bikin 1 variable di parentnya child nya tinggal pake super aja
        System.out.println(parent.name);


    }
}
