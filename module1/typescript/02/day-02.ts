let _huruf: string ="ini adalah sebuah string";
console.log(_huruf);

//string built in metodes
console.log(_huruf.slice(4, 10));
console.log(_huruf.toUpperCase());
console.log(_huruf.concat("19"));
console.log(_huruf + "19")
console.log(_huruf.replace("a", "*"));
console.log(_huruf.replace(/a/g, "*"));
console.log(_huruf.replace(/[i,a]/, "*"));
console.log(_huruf.replace(/[i,a]/g, "*"));

let _nomer: number =19.6132211;
console.log(_nomer);

//number built in methodes
console.log(_nomer.toString())
console.log(_nomer.toExponential(2))
console.log(_nomer.toFixed())
console.log(_nomer.toFixed(2))
console.log(_nomer.toFixed(5))

let _boolean: boolean = false;
console.log(_boolean);

//comparison operator (pengecekan apakah data sama)
let _mobil1:string = "bmw";
let _mobil2:string = "1";
let _mobil3:string = "bmw";
let _mobil4:number = 1;
let _mobil5:number = 2;
let _mobil6:number = 3;
//comparison == cek 2 value tanpa melihat tipe data
console.log (_mobil1 == _mobil2);
console.log (_mobil1 == _mobil3);
//comparison != cek 2 value tanpa melihat tipe data
console.log (_mobil1 != _mobil2);
console.log (_mobil1 != _mobil3);
//comparison === cek 2 value dengan melihat tipe data
console.log (_mobil1 === _mobil4);
//comparison
console.log (_mobil4 >= _mobil5)

//global built in methodes
let _stringAngka: string = "27.98199928";
console.log(Number(_stringAngka));
console.log(parseInt(_stringAngka));
console.log(parseFloat(_stringAngka));
console.log(String(_nomer));

//tamplate literals (bisa di enter supaya text tidak memanjang)
console.log(`variable ${_huruf}`);

//date data types
let _now: Date = new Date();
console.log(_now)
console.log(_now.toLocaleDateString());
console.log(_now.toLocaleTimeString());
console.log(_now.toLocaleString("id-in"));

//operand
let x: number = 19;
let y: number = 27;

//binary (memiliki lebih dari 1 opperand)
const _tambah = x + y;
const _kali = x * y;
console.log(_tambah);
console.log(_kali);

//unary (hanya memiliki 1 opperand)
const _minus = -x;
console.log(_minus);

//modify in place
x += x;
console.log(x);
y -= 7;
console.log(y);

//increment & decrement
let _counter : number = 13;
_counter++;
console.log(_counter)
_counter--;
console.log(_counter)

