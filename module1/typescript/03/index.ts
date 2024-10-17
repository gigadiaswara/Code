//chaining condition
//global scope
let _cuaca: string = "cerah";
let _aksi;

//bisa kita membuat _aksi lebih dari sekali karena dalam satu scope ({})
if(_cuaca==="hujan"){
    const _aksi: string = "tidak jalan";
    console.log(_aksi); 
}
if(_cuaca==="gerimis"){
    const _aksi : string = "pakai jas hujan bang";
    console.log(_aksi);
}
if(_cuaca !== "hujan" && _cuaca !== "gerimis"){
    const _aksi : string = "trabas aja bang";
    console.log(_aksi);
}
console.log(_cuaca == "deras" ? "naik mobil" : "mending berteduh"); //bisa menggunakan metode ini 

//
const _umur: number = 17;

    if(_umur>=17 && _umur<=19){
        _aksi = "sudah bisa buat ktp";
    }
    else if(_umur<17 || _umur>60){
        _aksi = "tidak bisa urus ktp";
    }
    else if (_umur>20){
        _aksi = "harusnya sudah punya KTP";
    }

console.log(`karena umur kamu ${_umur} maka kamu ${_aksi} `)


//Switch case digunakan untuk komparasi ===
const _buah: string = "pisang"
switch (_buah){
    case "apel":
    console.log("harga apel per biji 2.000");
    break; //untuk stop javascript (hapus break untuk lihat aksi)
    case "jeruk":
    console.log("harga jeruk per biji 3.500");
    break;
    default:
    console.log(`harga ${_buah} per biji 500`);
}

// for loop
for(let _i:number=1;_i>=-10;_i--){
    console.log(_i);
}

// while loop
let _countdown: number = 1;
while (_countdown>0){
    console.log(_countdown);
    if(_countdown === 6) break;
    _countdown++;
}

// do while loop
_countdown = 10
do {
    console.log(_countdown);
    if (_countdown === 6 ) break; 
_countdown--;
} while (_countdown > 0);

//continue
for(let _i:number=10;_i>=0;_i--){
    if (_i % 2 !==0) continue;
    console.log(_i);
}