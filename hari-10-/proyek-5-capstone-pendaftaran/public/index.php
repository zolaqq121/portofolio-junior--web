<?php
// filepath: d:\xampp\htdocs\portofolio-junior-web\hari-10-\proyek-5-capstone-pendaftaran\public\index.php
declare(strict_types=1);
require_once __DIR__ . '/../../src/bootstrap.php';

$pdo = getConnection();

$kata = trim((string) ($_GET['q'] ?? ''));
$perHalaman = 10;
$total = hitungPendaftar($pdo, $kata);
$jumlahHalaman = max(1, (int) ceil($total / $perHalaman));
$halaman = min($jumlahHalaman, max(1, (int) ($_GET['hal'] ?? 1)));
$daftar = ambilPendaftar($pdo, $kata, $perHalaman, ($halaman - 1) * $perHalaman);

$judul = 'Daftar Pendaftar';
require __DIR__ . '/../template/head.php';
?>

<style>
.pendaftar-page {
    max-width: 1100px;
    margin: 36px auto;
    padding: 0 16px;
    color: #1e293b;
    font-family: Arial, sans-serif;
}

.page-heading {
    margin-bottom: 22px;
}

.page-heading h1 {
    margin: 0 0 6px;
    color: #172554;
    font-size: 1.8rem;
}

.page-heading p {
    margin: 0;
    color: #64748b;
}

.list-card {
    overflow: hidden;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 8px 24px rgb(15 23 42 / 6%);
}

.list-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 16px;
    padding: 20px;
    border-bottom: 1px solid #e2e8f0;
}

.search-form label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
}

.search-controls {
    display: flex;
    gap: 8px;
}

.search-controls input {
    width: min(320px, 60vw);
    padding: 9px 11px;
    border: 1px solid #cbd5e1;
    border-radius: 7px;
    font: inherit;
}

.search-controls button,
.action-delete {
    padding: 9px 13px;
    border: 0;
    border-radius: 7px;
    background: #2563eb;
    color: #fff;
    font: inherit;
    cursor: pointer;
}

.search-controls button:hover {
    background: #1d4ed8;
}

.total-count {
    color: #64748b;
    font-size: 0.9rem;
}

.table-wrap {
    overflow-x: auto;
}

.pendaftar-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.pendaftar-table th,
.pendaftar-table td {
    padding: 14px 16px;
    border-bottom: 1px solid #e2e8f0;
    white-space: nowrap;
}

.pendaftar-table th {
    background: #f8fafc;
    color: #475569;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.pendaftar-table tbody tr:hover {
    background: #f8fafc;
}

.action-cell {
    display: flex;
    align-items: center;
    gap: 8px;
}

.action-edit {
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
}

.action-edit:hover {
    text-decoration: underline;
}

.action-delete {
    padding: 7px 10px;
    background: #dc2626;
    font-size: 0.9rem;
}

.action-delete:hover {
    background: #b91c1c;
}

.empty-state {
    padding: 32px 20px;
    color: #64748b;
    text-align: center;
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 6px;
    padding: 18px;
}

.pagination a {
    padding: 7px 11px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    color: #334155;
    text-decoration: none;
}

.pagination a.current,
.pagination a:hover {
    border-color: #2563eb;
    background: #2563eb;
    color: #fff;
}

@media (max-width: 600px) {
    .list-toolbar {
        align-items: stretch;
        flex-direction: column;
    }

    .search-controls input {
        width: 100%;
        min-width: 0;
    }

    .search-controls {
        width: 100%;
    }
}
</style>

<section class="pendaftar-page">
    <header class="page-heading">
        <h1>Daftar Pendaftar</h1>
        <p>Kelola data peserta yang telah mendaftar.</p>
    </header>

    <div class="list-card">
        <div class="list-toolbar">
            <form method="get" class="search-form">
                <label for="q">Cari nama pendaftar</label>
                <div class="search-controls">
                    <input id="q" name="q" value="<?= e($kata) ?>" placeholder="Masukkan nama...">
                    <button type="submit">Cari</button>
                </div>
            </form>

            <span class="total-count"><?= (int) $total ?> pendaftar</span>
        </div>

        <?php if ($daftar === []): ?>
        <div class="empty-state">Tidak ada data pendaftar.</div>
        <?php else: ?>
        <div class="table-wrap">
            <table class="pendaftar-table">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>No. HP</th>
                        <th>Kelas</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($daftar as $p): ?>
                    <tr>
                        <td><?= e($p['nama']) ?></td>
                        <td><?= e($p['email']) ?></td>
                        <td><?= e($p['no_hp']) ?></td>
                        <td><?= e($p['nama_kelas']) ?></td>
                        <td>
                            <div class="action-cell">
                                <a class="action-edit" href="ubah.php?id=<?= (int) $p['id'] ?>">Ubah</a>
                                <a class="action-edit" href="cetak.php?id=<?= (int) $p['id'] ?>"
                                    target="_blank" rel="noopener">Cetak</a>
                                <form method="post" action="hapus.php"
                                    onsubmit="return confirm('Yakin ingin menghapus?')">
                                    <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">
                                    <input type="hidden" name="id" value="<?= (int) $p['id'] ?>">
                                    <button class="action-delete" type="submit">Hapus</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <?php if ($jumlahHalaman > 1): ?>
        <nav class="pagination" aria-label="Halaman">
            <?php for ($i = 1; $i <= $jumlahHalaman; $i++): ?>
            <a href="?hal=<?= $i ?>&q=<?= urlencode($kata) ?>"
                class="<?= $i === $halaman ? 'current' : '' ?>"><?= $i ?></a>
            <?php endfor; ?>
        </nav>
        <?php endif; ?>
        <?php endif; ?>
    </div>
</section>

<?php require __DIR__ . '/../template/footer.php'; ?>
<form method='post' action='hapus.php' class='form-hapus d-inline' data-nama='<?= e($p['nama']) ?>'>.