//function adalah code yang reuseable (bisa digunakan berkali-kali)
let X: number = 1;
let Y: number = 2;
let penambahan: number = X + Y;
console.log (penambahan)

function pertambahan(X:number, Y:number){
    console.log (X)
    console.log (Y)
    return X + Y
};
console.log (pertambahan (1,3));
console.log (pertambahan (8,12));
console.log (pertambahan (4,60));

function pembagian (X: number, Y: number){
    console.log (X)
    console.log (Y)
    return X / Y
};
console.log (pembagian (4, 2));
console.log (pembagian (9, 3));

function matematika (operasi: string, X: number, Y: number){
    if (operasi === "tambah"){
        return X + Y
    } else if (operasi === "kali"){
        return X * Y
    } else if (operasi === "bagi"){
        return X / Y 
    } else {
        return ("masukan operasi matematika yang benar")
    };
};
console.log (matematika ("tambah", 2, 3));
console.log (matematika ("kali", 2, 4));
console.log (matematika ("bagi", 4, 2));
console.log (matematika ("kurang", 2, 3));

//rest parameter
const someFunc = function (x: number, y: number, ... z: number[]) {
    console.log(z);
    if (z.length>0){
        return true
    } else {
        return false
    }
}
console.log(someFunc(3,2,4,5,6,7,2,4,3,4))