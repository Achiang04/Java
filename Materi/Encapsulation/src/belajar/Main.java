package belajar;

import helper.Data2;

public class Main {
    public static void main(String[] args) {
        Data2 data4 = new Data2();
        Data data1 = new Data(1, 2, true);
        data1.display();

        Data data2 = new Data(2, 1, false);
        data2.display();

    }
}

class Data {
    //	int dataDefault; // default, dapat diakses se-package saja
//	protected int dataProtected; // dapat diakses di package lain tapi child saja
    public int dataPublic; // dapat diakses ke semua package
    private int dataPrivate; // hanya dapat diakses se class
    private String gender;
    private String password;

    Data(int inputPublic, int inputPrivate, boolean gender){
        this.gender = "perempuan";
        if (gender) {
            this.gender = "laki - laki";
        }

        this.dataPublic = inputPublic;
        this.dataPrivate = inputPrivate;
        this.password = generatePassword();
    }

    void display() {
        System.out.println("public \t\t: " + this.dataPublic);
        System.out.println("private \t: " + this.dataPrivate);
        System.out.println("gender \t\t: " + this.gender);
        System.out.println("password \t: " + this.password);
    }

    // write
    public void setDataPrivate(int dataPrivate) {
        this.dataPrivate = dataPrivate;
    }

    // read
    public int getDataPrivate() {
        return this.dataPrivate;
    }

    public void setGender(boolean gender) {
        this.gender = "perempuan";
        if (gender) {
            this.gender = "laki - laki";
        }
    }

    public String getGender() {
        return this.gender;
    }

    public String getPassword() {
        return this.password;
    }

    private String generatePassword() {
        return "abc" + this.gender;
    }
}