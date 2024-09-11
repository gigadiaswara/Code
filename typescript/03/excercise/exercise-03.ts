//1
const nomor1:number = 9
for(let i = 1 ; i <= 10 ; i++){
    console.log(`${nomor1} x ${i}`)
}

//2
let _string1: string = "kasur ini rusak";
let _reverseString: string = _string1.split("").reverse().join("");
console.log (_string1 == _reverseString ? "palindrome" : "bukan palindrome");
let palindrome: string = "bukan palindrome";

for (let i = 0 ; i < _string1.length / 2 ; i++){
    console.log(_string1[i])
    console.log(_string1[_string1.length-1-i])
    if (_string1[i] === (_string1[_string1.length-1-i]))
        {palindrome = "palindrome"};
    break;
}
console.log(palindrome);

//3
const cm: number = 50;
const cmToKm: number = cm / 100000;
console.log(cmToKm);

//4
const _number4: number= 1000;
let numberToCurency = _number4.toLocaleString("In-ID", {
    style: "currency",
    currency: "IDR"
})
console.log(numberToCurency)

