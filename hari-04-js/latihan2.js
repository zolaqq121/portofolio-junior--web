// Program A: konversi nilai ke huruf
const nilai = Number(prompt('Nilai (0-100):'));
let grade;
if (nilai >= 85) grade = 'A';
else if (nilai >= 70) grade = 'B';
else if (nilai >= 55) grade = 'C';
else grade = 'D';
console.log(`Grade: ${grade}`);

// Program B: tahun kabisat
const tahun = Number(prompt('Tahun:'));
const kabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
console.log(kabisat ? 'Kabisat' : 'Bukan kabisat');