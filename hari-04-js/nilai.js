const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const NILAI_MIN = 0;
const NILAI_MAKS = 100;
const BATAS_LULUS = 65``;

async function main() {
    const rl = readline.createInterface({ input, output });
    const daftarNama = [];
    const daftarNilai = [];
    let jalan = true;

    while (jalan) {
        console.log('\n===== PENGOLAH NILAI =====');
        console.log('1. Input nilai siswa');
        console.log('2. Tampilkan statistik');
        console.log('3. Tampilkan predikat per siswa');
        console.log('4. Keluar');

        const pilihan = await rl.question('Pilih menu (1-4): ');

        switch (pilihan) {
            case '1': {
                const nama = (await rl.question('Nama siswa: ')).trim();
                const nilaiInput = await rl.question('Nilai (0-100): ');
                const nilai = Number(nilaiInput);

                // Validasi nama tidak kosong dan nilai berupa angka valid (0-100)
                if (nama === '' || Number.isNaN(nilai) || nilai < NILAI_MIN || nilai > NILAI_MAKS) {
                    console.log('❌ Input tidak valid! Pastikan nama tidak kosong dan nilai berada di antara 0 - 100.');
                } else {
                    daftarNama.push(nama);
                    daftarNilai.push(nilai);
                    console.log(`✅ Data siswa "${nama}" berhasil disimpan.`);
                }
                break;
            }
            case '2': {
                if (daftarNama.length === 0) {
                    console.log('⚠️ Belum ada data nilai siswa yang dimasukkan.');
                } else {
                    let total = 0;
                    let tertinggi = daftarNilai[0];
                    let terendah = daftarNilai[0];

                    for (let i = 0; i < daftarNilai.length; i++) {
                        const nilaiSiswa = daftarNilai[i];
                        total += nilaiSiswa;

                        if (nilaiSiswa > tertinggi) {
                            tertinggi = nilaiSiswa;
                        }
                        if (nilaiSiswa < terendah) {
                            terendah = nilaiSiswa;
                        }
                    }

                    const rataRata = total / daftarNilai.length;

                    console.log('\n--- RINGKASAN STATISTIK KELAS ---');
                    console.log(`• Rata-rata nilai kelas : ${rataRata.toFixed(2)}`);
                    console.log(`• Nilai tertinggi       : ${tertinggi}`);
                    console.log(`• Nilai terendah        : ${terendah}`);
                }
                break;
            }
            case '3': {
                if (daftarNama.length === 0) {
                    console.log('⚠️ Belum ada data siswa yang dimasukkan.');
                } else {
                    console.log('\n--- DAFTAR PREDIKAT SISWA ---');
                    for (let i = 0; i < daftarNama.length; i++) {
                        const nama = daftarNama[i];
                        const nilai = daftarNilai[i];
                        let grade = '';

                      
                        if (nilai >= 85) {
                            grade = 'A';
                        } else if (nilai >= 75) {
                            grade = 'B';
                        } else if (nilai >= BATAS_LULUS) { // Nilai C (Cukup / Pas Batas Lulus 70)
                            grade = 'C';
                        } else {
                            grade = 'D';
                        }

                        const status = nilai >= BATAS_LULUS ? 'Lulus' : 'Tidak Lulus';

                        console.log(`${i + 1}. Nama: ${nama.padEnd(12)} | Nilai: ${String(nilai).padEnd(3)} | Grade: ${grade} | Status: ${status}`);
                    }
                }
                break;
            }
            case '4':
                jalan = false;
                console.log('Terima kasih.');
                break;
            default:
                console.log('Pilihan tidak valid. Silakan pilih antara 1 sampai 4.');
        }
    }

    rl.close();
}

main();