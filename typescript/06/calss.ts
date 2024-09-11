//CLASS STATIC
class DB {
    static #conection = "";

    static #initializeConnection () {
        const randomNum = Math.ceil(Math.random() *100);
        DB.#conection = `New Database Connection ${randomNum}`;       
    }
    static getConnection() {
        if (!DB.#conection) {
            DB.#initializeConnection();        
        }
        return DB.#conection;
    }
}

console.log(DB.getConnection())
console.log(DB.getConnection())

//CLASS BUKAN STATIC
class Baju  {
    tipe: string;
    ukuran: number;
    unit: string;

    constructor(tipe: string, ukuran: number, unit: string){
        this.tipe = tipe;
        this.ukuran = ukuran;
        this.unit = unit;
    }
}
console.log(bajuTommy.tipe, bajuTommy.ukuran+bajuTommy.unit) 