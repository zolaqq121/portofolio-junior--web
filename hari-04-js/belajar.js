
const { match } = require("node:assert");
const { stat } = require("node:fs");

let nama = "Zahira";
let umur = 20;
let tinggiBadan =1.7;
let statusAktif = true;
console.log(`Helo, ${nama} Umur ${umur} tahun.`);
console.log(`Tiggi Badan: ${tinggiBadan} m, status Aktif: ${statusAktif}`);

console.log();

//cek tipe data
console.log(typeof (`5` + 3));
console.log(typeof (0.1 + 0.2));
console.log(typeof (Number(`abc`)));
console.log(typeof (10 / 3));
console.log(typeof (10 % 3));
console.log(typeof (2 ** 10));
//hitung luas lingkaran
let jari = 7;
let luaslingkaran = Math.PI * jari ** 2;
console.log(`Luas lingkaran dengan jari-jari ${jari} adalah ${luaslingkaran}`);
// Menghitung keliling lingkaran
let KelilingLingkaran = 2 * Math.PI * jari;
console.log(`Keliling lingkaran dengan jari-jari ${jari} adalah ${KelilingLingkaran}`);

// Konversi suhu
let suhuC = 100;
let suhuF = (suhuC * 9/5) + 32;
console.log(`${suhuC} derajat Celcius sama dengan ${suhuF} derajat Fahrenheit`);
//menghitung hari
let detikPerHari = 24 * 60 * 60;
console.log(`jumlah detik dalam satu hari adalah ${detikPerHari} detik`);

let nilai, status1, status2;
nilai = -1; // Contoh nilai, bia diganti sesuai kebutuhan
if (nilai % 2 === 0) {
    status1 = "genap";
} else {
    status1 = "ganjil";
}
console.log(status1);
if (nilai > 0) {
    status2 = "positif";
} else if (nilai < 0 ) {
    status2 = "negatif";
} else {
    status2 = "nol";
}
console.log(status2);

let durasijam, sisajam, totalhari, bayar;
durasijam = 30;
sisajam = durasijam % 24;
totalhari = (durasijam - sisajam) / 24;
if (sisajam <= 2) {
    bayar = 3000;
} else {
    bayar = 3000 + (sisajam - 2) * 2000;
}
if (bayar >= 15000) {
    bayar = 15000;
} 
bayar = totalhari * 15000 + bayar;
console.log(bayar);

let nila1, nilai2, pilih, hasil;
nila1 = 10;
nilai2 = 0;
pilih = `/`; //cpntoh operator, bisa diganti
switch (pilih) {
case   `+`:
hasil = nilai1 + nilai2;
break;
case  `-`:
hasil = nila1 - nilai2;
break;
case `*`:
hasil = nila1 * nilai2;
break;
case `/`:
if (nilai2 === 0) {
    hasil = "tidak teridentifikasi";
} else {
    hasl = nila1 / nilai2;
}
break;
default:
hasil = "Operator tidak valid";
}
console.log

let berat, tinggi, BMI, status;
berat = 90;
tinggi = 1.74;
BMI = berat / (tinggi * tinggi);
if (BMI <18.5) {
    status = "kurang";
} else if (BMI <= 24.9) {
    status = "normal"
} else if (BMI <= 29.9) {
    status = "lebih";
} else {
    status = "obesits"; 
}
console.log(status)
//faktorial
const n = 3;
let faktorial = 1;
for (let i = 2; i <= n; i++) {
    faktorial *= i; //
}
console.log(`${n}!  $(faktorial)`);

// fibonaci 10 suku pertama
let a = 0;
let b = 1;
const hasilP = [];
for (let i = 0; i < 10; i++) {
    hasilP.push(a);
    [a, b] = [b, a + b];
}
console.log(hasilP.join(`, `));