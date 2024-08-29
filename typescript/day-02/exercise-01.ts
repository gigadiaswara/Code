let _length:number =5;
let _width:number =3;
let _radius:number =5;
let _pi:number = 3.14159265358979323846

//1
let _luas = _length * _width;
console.log(`Output : ${_luas}`);

//2
let _keliling = 2 * (_length + _width);
console.log(`Output : ${_keliling}`);

//3
let _diameter = 2 * _radius;
let _kelilingLingkaran = _diameter * _pi;
let _luasLingkaran = _radius * _radius * _pi;
console.log(`Output : diameter = ${_diameter}`);
console.log(`Output : ${_luasLingkaran.toFixed(2)}`);
console.log(`Output: ${_kelilingLingkaran.toFixed(2)}`);

//4
let _a:number = 80;
let _b:number = 65;
let _x:number= 180 - _a - _b;
console.log(`sudut x = ${_x}`);

//5
var _days:number = 400;
var _years:number = Math.floor(_days / 365);
console.log(_years);
var _remaningDays:number = _days - 365;
console.log(_remaningDays);
var _mounthDummy:number = (_remaningDays / 30);
console.log(_mounthDummy);
var _mounths:number = Math.floor(_mounthDummy);
console.log(_mounths);
var _daysLeft:number = _remaningDays - (_mounths * 30);
console.log(_daysLeft);
console.log(`${_years} year, ${_mounths} mounth, ${_daysLeft} day `);

var _days:number = 366;
var _years:number = Math.floor(_days / 365);
console.log(_years);
var _remaningDays:number = _days - 365;
console.log(_remaningDays);
var _mounthDummy:number = (_remaningDays / 30);
console.log(_mounthDummy);
var _mounths:number = Math.floor(_mounthDummy);
console.log(_mounths);
var _daysLeft:number = _remaningDays - (_mounths * 30);
console.log(_daysLeft);
console.log(`${_years} year, ${_mounths} mounth, ${_daysLeft} day `);

//6
let _date1: Date = new Date('2022-01-20');
let _date2: Date = new Date('2022-01-22');
let _diffInTime: number = _date2.getTime() - _date1.getTime();
console.log(_diffInTime)
let _diffInDays: number = _diffInTime / (1000 * 3600 * 24)
console.log(`Perbedaan antara 2 waktu tersebut adalah ${_diffInDays} hari.`);