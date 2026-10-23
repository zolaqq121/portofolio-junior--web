const peserta = [
  { id: 1, nama: 'Sari', kelas: 'Web', nilai: 90, email: 'sari@gmail.com' },
  { id: 2, nama: 'Budi', kelas: 'Web', nilai: 68, email: 'budi@gmail.com' },
  { id: 3, nama: 'Citra', kelas: 'Data', nilai: 82, email: 'citra@gmail.com' },
  { id: 4, nama: 'Dewi', kelas: 'Data', nilai: 75, email: 'dewi@gmail.com' },
  { id: 5, nama: 'Eko', kelas: 'Web', nilai: 88, email: 'sari@gmail.com' },
  { id: 6, nama: 'Fajar', kelas: 'Mobile', nilai: 95, email: 'fajar@gmail.com' },
  { id: 7, nama: 'Gina', kelas: 'Mobile', nilai: 60, email: 'gina@gmail.com' },
  { id: 8, nama: 'Hadi', kelas: 'Data', nilai: 78, email: 'budi@gmail.com' }
];

const getPesertaLulus = (data) => data.filter(p => p.nilai >= 75).map(p => p.nama);

const getRataRataPerKelas = (data) => {
  const kelasData = data.reduce((acc, p) => {
    if (!acc[p.kelas]) acc[p.kelas] = { total: 0, count: 0 };
    acc[p.kelas].total += p.nilai;
    acc[p.kelas].count += 1;
    return acc;
  }, {});

  return Object.fromEntries(
    Object.entries(kelasData).map(([kelas, val]) => [kelas, val.total / val.count])
  );
};

const getNilaiTertinggi = (data) => data.reduce((max, p) => (p.nilai > max.nilai ? p : max), data[0]);

const cariPeserta = (data, keyword) => {
  const query = keyword.toLowerCase();
  return data.filter(p => p.nama.toLowerCase().includes(query));
};

const getDaftarPeringkat = (data) => {
  return [...data]
    .sort((a, b) => b.nilai - a.nilai)
    .map((p, index) => ({ peringkat: index + 1, ...p }));
};

const getEmailUnik = (data) => [...new Set(data.map(p => p.email))];