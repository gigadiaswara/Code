//1
let _angka:number = 25;
console.log(_angka % 2 ==0? "Genap" : "Ganjil");
_angka = 2;
console.log(_angka % 2 ==0? "Genap" : "Ganjil");

//2
const _angka2: number = 11;
let prima: boolean = true;
 
for (let i: number = 2; i <_angka2; i++){
    if (_angka2 % i == 0){
        prima = false;
        break
    }
}
console.log (prima)

//3
const _angka3: number = 3
let hasil: string = `${_angka3}-> `;
let tambah : number = 0
for(let i = 1; i <= _angka3; i++){
    tambah += i;
    console.log(i)
    console.log(tambah)
    hasil += i === _angka3 ? `${i} = ${tambah}` : `${i} +`
}
console.log (hasil)

//4
const _angka4: number = 6 
hasil = `${_angka4}! -> ${_angka4} x `;
let faktor = _angka4
for(let i = _angka4 - 1 ; i>=1 ; i--){
    faktor *= i;
    console.log(i)
    console.log(tambah)
    hasil += i === 1 ? `${i} = ${faktor}` : `${i} x`
}
console.log (hasil)


//5
const _angka5: number = 15
let fibonaci: number = 0
let n1: number = 0
let n2: number = 1

for (let i = 1 ; i < _angka5; i++){
console.log(i)
    fibonaci =  n1 + n2
    n1 = n2
    n2 = fibonaci
console.log(fibonaci)
}
console.log(fibonaci)
