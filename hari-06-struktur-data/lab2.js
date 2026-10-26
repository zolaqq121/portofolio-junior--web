// hitung frekuensi kata dari kalimat
const kalimat = 'saya belajar web saya sua web';
const kataArray = kalimat.split(' ');
const frekuensiMap = new Map();

kataArray.forEach(kata => {
    frekuensiMap.set(kata, (frekuensiMap.get(kata) || 0) + 1);
});

const frekuensiTerurut = [...frekuensiMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([kata, frekuensi]) => `${kata}: ${frekuensi}`);

console.log('Frekuensi kata (terurut):', frekuensiTerurut);

// jumlah kata semua kata dalam kalimat
const jumlahkata = kataArray.length;
console.log('jumlah kata:', jumlahkata);

// hilangkan duplikat dari daftar email (versi set), tampilkan sebelum dan sesudah
const emails = ['user@example.com', 'user2@example.com', 'user@example.com'];
console.log('sebelum hilangkan duplikat:', emails);
const emailsUnik = [...new Set(emails)]; // Perbaikan: 'set' diubah menjadi 'Set' (huruf besar)
console.log('setelah hilangkan duplikat:', emailsUnik);

// cari irisan 2 daftar peserta
const kelasA = new Set(['Sari', 'budi', 'citra']); // Perbaikan: 'set' diubah menjadi 'Set'
const kelasB = new Set(['Budi', 'Dewi', 'Eka']);  // Perbaikan: 'set' diubah menjadi 'Set'
const irisan = [...kelasA].filter(nama => kelasB.has(nama));
console.log('irisan kelas a dan b:', irisan);

// buat fungsi adaDuplikat(daftar) (versi set) dan dengan array kosong
function adaDuplikat(daftar) {
    return new Set(daftar).size !== daftar.length; // Perbaikan: 'set' diubah menjadi 'Set'
}

// uji fungsi duplikat
console.log('Array kosong:', adaDuplikat([])); // false
console.log('satu elemen:', adaDuplikat(['sari'])); // false
console.log('Elemen berulang:', adaDuplikat(['sari', 'budi', 'sari'])); // true