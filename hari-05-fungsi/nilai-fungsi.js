const BATAS_LULUS = 70;

function hitungRataRata(daftar) {
    if (daftar.length === 0) return 0;
    return daftar.reduce((jumlah, n) => jumlah + n, 0) / daftar.length;
}

function cariTertinggi(daftar) {
    return daftar.length === 0 ? null : Math.max(...daftar);
}

function cariTerendah(daftar) {
    return daftar.length === 0 ? null : Math.min(...daftar);
}

function tentukanGrade(nilai) {
    if (nilai >= 85) return 'A';
    if (nilai >= 70) return 'B';
    if (nilai >= 55) return 'C';
    return 'D';
}

function tentukanStatus(nilai) {
    return nilai >= BATAS_LULUS ? 'Lulus' : 'Tidak lulus';
}

function nilaiValid(nilai) {
    return Number.isFinite(nilai) && nilai >= 0 && nilai <= 100;
}

function jalankanPengujian() {
    console.assert(hitungRataRata([80, 90]) === 85, 'rata-rata 80,90 harus 85');
    console.assert(hitungRataRata([]) === 0, 'rata-rata array kosong harus 0');
    console.assert(tentukanGrade(85) === 'A', 'nilai 85 harus A');
    console.assert(tentukanGrade(69) === 'C', 'nilai 69 harus C');
    console.assert(nilaiValid(101) === false, '101 tidak valid');
}

function tampilkanMenu() {
    console.log("=== APLIKASI PENGOLAH NILAI ===");
    console.log("1. Input & Analisis Nilai Siswa");
    console.log("--------------------------------");
}

function tampilkanLaporan(nama, nilaiList) {
    console.log(`\n--- Laporan: ${nama} ---`);
    
    if (!nilaiList.every(nilaiValid)) {
        console.log("Peringatan: Terdapat nilai tidak valid!");
        return;
    }

    const rataRata = hitungRataRata(nilaiList);

    console.log(`Nilai: ${nilaiList.join(', ')}`);
    console.log(`Rata-rata: ${rataRata.toFixed(2)}`);
    console.log(`Tertinggi: ${cariTertinggi(nilaiList)}`);
    console.log(`Terendah: ${cariTerendah(nilaiList)}`);
    console.log(`Grade: ${tentukanGrade(rataRata)}`);
    console.log(`Status: ${tentukanStatus(rataRata)}`);
    console.log("--------------------------------");
}

function main() {
    jalankanPengujian();
    tampilkanMenu();
    tampilkanLaporan("Budi Santoso", [80, 85, 90, 75, 88]);
}



main();

