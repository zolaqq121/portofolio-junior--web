
const peserta = [
  { id: 1, nama: "Sari", kelas: "Web", nilai: 90, aktif: true },
  { id: 2, nama: "Budi", kelas: "Web", nilai: 68, aktif: true },
  { id: 3, nama: "Citra", kelas: "Data", nilai: 82, aktif: false },
  { id: 4, nama: "Dewi", kelas: "Mobile", nilai: 75, aktif: true },
  { id: 5, nama: "Eko", kelas: "Web", nilai: 88, aktif: false },
  { id: 6, nama: "Fajar", kelas: "Data", nilai: 95, aktif: true },
  { id: 7, nama: "Gita", kelas: "Mobile", nilai: 60, aktif: true },
  { id: 8, nama: "Hadi", kelas: "Web", nilai: 79, aktif: false },
  { id: 9, nama: "Indah", kelas: "Data", nilai: 91, aktif: true },
  { id: 10, nama: "Joko", kelas: "Mobile", nilai: 85, aktif: true },
];


//Tampilkan peserta aktif
const pesertaAktif = peserta.filter(p => p.aktif);
console.log(`peserta Aktif;`, pesertaAktif);

//Urutkan berdasarkan nama (sort dengan localeCompare) tanpa mengubah array asli
const pesertaTerurut = [...peserta].sort((a, b) => a.nama.localeCompare(b.nama));
console.log(`peserta Terurut`, pesertaTerurut);

//Cari peserta berdasarkan id (find) dan tangani bila tidak ditemukan
const pesertaById = peserta.find(p => p.id === 2);
  if (pesertaById) {
    console.log(`Peserta Ditemukan:` , pesertaById);
  } else {
    console.log(`Peserta tidak ditemukan`);
  }

//Hitung jumlah peserta per kelas dengan objek penghitung
const jumlahPerKelas = peserta.reduce((acc, p) => {
  acc[p.kelas] = (acc[p.kelas] || 0) + 1;
  return acc;
}, {});
console.log(`jumlahPeserta Per Kelas:`, jumlahPerKelas);

//Tambah, ubah, dan hapus peserta lalu cetak hasilnya

console.log("\n--- 5. Operasi Tambah, Ubah, dan Hapus ---");
let dataModifikasi = [...peserta];

// a. Tambah peserta baru
const pesertaUpdate = peserta.find(p => p.id === 1);
if (pesertaUpdate) {
    pesertaUpdate.nilai = 95;
}
console.log(`Setelah Mengubah Nilai Peserta:`, peserta);



// Hapus peserta (misal: hapus peserta dengan id 3 menggunakan filter)
const pesertaToDelete = peserta.find(p => p.id === 3);
if (pesertaToDelete) {
    const index = peserta.indexOf(pesertaToDelete);
    peserta.toSpliced(index, 1);
}
console.table(`setelah Menghapus Pesert:a`, peserta);

//Ubah array menjadi objek berindeks id (reduce) untuk pencarian O(1)

const pesertaObjekId = peserta.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

console.log("Objek Indeks ID:", pesertaObjekId);
console.log("Akses langsung data ID 7 (O(1)):", pesertaObjekId[7]);