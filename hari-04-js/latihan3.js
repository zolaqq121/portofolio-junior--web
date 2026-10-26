// Faktorial
/*
const n = 5;
let faktorial = 1;
for (let i = 2; i <= n; i++) {
faktorial *= i;
}
console.log(`${n}! = ${faktorial}`);z

// fibonaci 10 suku pertama
let a = 0;
let b = 1;
const hasilP = [];
for (let i = 0; i < 10; i++) {
    hasilP.push(a);
    [a, b] = [b, a + b];
}
console.log(hasilP.join(`, `));

//tabel perkalian
for (let i = 1; i <= 10; j++) {
    for (let j = 1; j <= 10;j++){
        console.log(`$(1) x $(j) = $(i * j)`);
    }
}
*/
// piramida bintang
for (let i = 1; i <= 10; i++) {
    let hasil = ``;
    for (let j = 1; j <= i; j++) {
        hasil += `*`;
    }
    console.log(hasil);
}

//fizzBuz 1-50
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`fizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`fizz`);
    } else if (i % 5 === 0 ) {
        console.log(`Buzz`);
    }else {
            console.log(`Buzz`);
        } 
    }
//menebak angka random
let angka = Math.floor(Math.random() * 100) + 1;
let input;
do {
    input = parseInt(prompt(" Masukkan angka; "));
    if (input < angka) {
    console.log("Angka Terlalu Kecil");
    } else if (input > angka) {
        console.log("angka terlalu besar");
    } else {
        console.log("Benar");
    }
}while (angka !== input)