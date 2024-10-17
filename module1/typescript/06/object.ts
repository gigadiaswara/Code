interface IUser {
   nama: string,
   umur: number,
   tempatTinggal: {
    alamat: string;
    alamatLengkap: {
        kodePos: number;
    };
   };
   greet: () => void; 
}

const user: IUser = {
    nama: "Giga Diaswara",
    umur: 25,
    tempatTinggal: {
     alamat: "Pesona Permata Gading II Blok R-14",
      alamatLengkap: { 
      kodePos: 61233
    },
    },
    greet(){
        return `Hello ${this.nama} umur kamu ${this.umur}`
    }
}
console.log(user.greet());
console.log(user.nama)
console.log(user.tempatTinggal.alamat)

//
type Product = {
    merk: string,
    harga: number,
}

interface IElektronik extends Product{
    watt: number;
}
interface IDapur extends IElektronik {
    type: string;
};
const kulkas: IDapur = {
    merk: "toshiba",
    harga: 5000000,
    watt: 225,
    type: "Dua Pintu"
};

interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    if(this.length === 0){
        return -1
    }else{
        return this[this.length - 1]
    }
};

const arr = [JSON.parse('[null, {}, 3]')]
console.log(arr.last())

const arr2 = JSON.parse('[]')
console.log(arr2.last())