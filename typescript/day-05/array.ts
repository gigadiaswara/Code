let sepatu1: string = "nike";
let sepatu2: string = "addidas";
let sepatu3: string = "puma";
console.log (sepatu1);

//Array (tidak bagus untuk digunakan lebih dari satu type data),
let listSepatu: string[] = ["Adiddas", "Nike", "Vans", "Puma", "Rebook"];
let listAngka: number [] = [1, 2, 3, 4, 5];
//list array selalu dimulai dari index ke-0
console.log (listSepatu[2]);
console.log (listAngka[3]);
console.log (listSepatu.length);
//mengambil data list sepatu terakhir lalu menghapus data yang sudah keluar (.pop)
console.log (listSepatu.pop());
console.log (listSepatu.pop());
console.log (listSepatu.pop());
//karena sudah dikeluarkan 3 data sepatu maka data sepatu yang akan keluar tinggal addidas dan nike
console.log (listSepatu);
//menambah data baru pada index terakhir menggunakan built in method
listSepatu.push ("converse");
console.log (listSepatu);
//mengambil data list sepatu pertama lalu menghapus data yang sudah keluar (.shift)
console.log (listSepatu.shift());
console.log (listSepatu);
//mengembalikan data yg hilang
listSepatu.unshift("Adiddas");
console.log (listSepatu);
//membalik urutan data
listSepatu.reverse();
console.log (listSepatu);
//untuk menggabungkan array menggunakan concat
//mengeluarkan semua data
for (let sepatu of listSepatu)
    console.log (sepatu)

for (let i = 0; i <= listSepatu.length; i++ ) {
    console.log(i)
    console.log(listSepatu[i])
}

let listArray: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6, 9, 8]
];

for (let i: number = 0; i<listArray.length; i++){
    for (let j: number = 0; j < listArray[i].length; j++){
        console.log(listArray[i][j])
    }
    }

