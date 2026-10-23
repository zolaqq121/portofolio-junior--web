import { tambah, bagi } from "../proyek-2-kalkulator/operasi.js";

//contoh penggunaan
console.log("hasil tambah:", tambah(5, 3));// output: 8
console.log("hasil bagi:", bagi(1, 2));// output:5


import { hitungRataRata, cariTertinggi, cariTerendah } from "./matematika.js";

const inputNilai = document.getElementById("input-nilai");
const btnHitung = document.getElementById("btn-hitung");
const elRataRata = document.getElementById("rata-rata");
const elTertinggi = document.getElementById("tertinggi");
const elTerendah = document.getElementById("terendah");

btnHitung.addEventListener("click", () => {
  const nilaiArr = inputNilai.value
    .split(",")
    .map((val) => parseFloat(val.trim()))
    .filter((val) => !isNaN(val));

  if (nilaiArr.length === 0) return;

  elRataRata.textContent = hitungRataRata(nilaiArr).toFixed(2);
  elTertinggi.textContent = cariTertinggi(nilaiArr);
  elTerendah.textContent = cariTerendah(nilaiArr);
});
