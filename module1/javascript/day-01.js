console.log("Hello World");
console.log("Hello Purwadhika");
console.log("Lets Learn Java Script");

//Variable
//LET Digunakan jika kita tahu data dapat dirunah (*let tidak boleh sama)
let nama;
nama = "budi";
let umur = "18";
console.log(nama);
console.log(umur);
//merubah LET
nama = "agus";
console.log(nama+umur);
umur = "24";
console.log(nama+umur);

//CONS Digunakan Jika tahu data tidak dapat berubah
const angka =3;
const Angka =6;
const tipebmw = "7";
console.log(angka);
console.log(tipebmw);
console.log(angka+Angka);
console.log(angka+Angka+tipebmw);

//VAR jarang digunakan untuk team work karena kita tidak tahu apakah data sudah terregister sebelumnya
var pekerjaan = "programmer!"
var pekerjaan = "kontraktor"
console.log(pekerjaan);

//tipe data String=text, Number=angka, Boolean=True/False, Null=0(tidak ada), Undefind=tidak ditemukan/habis
console.log(typeof nama);
console.log(typeof angka);
console.log(typeof tipebmw);