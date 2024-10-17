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

for (let i = 0; i <= listSepatu.length; i++ ) {
    console.log(i)
    console.log(listSepatu[i])
}

let listArray: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6, 7, 8]
];

for (let i: number = 0; i<listArray.length; i++){
    for (let j: number = 0; j < listArray[i].length; j++){
        console.log(listArray[i][j])
    }
    }