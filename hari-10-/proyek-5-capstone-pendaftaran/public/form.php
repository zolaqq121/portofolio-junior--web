<?php
// filepath: d:\xampp\htdocs\portofolio-junior-web\hari-10-\proyek-5-capstone-pendaftaran\public\form.php
require_once __DIR__ . '/../../src/bootstrap.php';
require_once __DIR__ . '/tambah.php';
?>

<style>
.form-page {
    max-width: 640px;
    margin: 40px auto;
    padding: 32px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    box-shadow: 0 12px 30px rgb(15 23 42 / 8%);
    font-family: Arial, sans-serif;
}

.form-page h1 {
    margin: 0 0 8px;
    color: #172554;
    font-size: 1.7rem;
}

.form-page .description {
    margin: 0 0 24px;
    color: #64748b;
}

.form-group {
    margin-bottom: 18px;
}

.form-group label {
    display: block;
    margin-bottom: 7px;
    color: #334155;
    font-weight: 600;
}

.form-control,
.form-select {
    box-sizing: border-box;
    width: 100%;
    padding: 11px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: #fff;
    color: #0f172a;
    font: inherit;
}

.form-control:focus,
.form-select:focus {
    border-color: #2563eb;
    outline: 3px solid rgb(37 99 235 / 15%);
}

.form-control.is-invalid,
.form-select.is-invalid {
    border-color: #dc2626;
}

.invalid-feedback {
    display: block;
    margin-top: 6px;
    color: #dc2626;
    font-size: 0.875rem;
}

.form-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
}

.btn-submit,
.btn-cancel {
    padding: 10px 18px;
    border-radius: 8px;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
}

.btn-submit {
    border: 0;
    background: #2563eb;
    color: #fff;
    font-weight: 600;
}

.btn-submit:hover {
    background: #1d4ed8;
}

.btn-cancel {
    border: 1px solid #cbd5e1;
    color: #334155;
}

@media (max-width: 600px) {
    .form-page {
        margin: 20px 12px;
        padding: 22px;
    }
}
</style>

<main class="form-page">
    <h1>Form Pendaftaran</h1>
    <p class="description">Lengkapi data berikut untuk mendaftar.</p>

    <form method="post">
        <input type="hidden" name="csrf" value="<?= e(tokenCsrf()) ?>">

        <div class="form-group">
            <label for="nama">Nama</label>
            <input id="nama" name="nama" class="form-control <?= isset($galat['nama']) ? 'is-invalid' : '' ?>"
                value="<?= e($lama['nama']) ?>">
            <?php if (isset($galat['nama'])): ?>
            <div class="invalid-feedback"><?= e($galat['nama']) ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" name="email" type="email"
                class="form-control <?= isset($galat['email']) ? 'is-invalid' : '' ?>" value="<?= e($lama['email']) ?>">
            <?php if (isset($galat['email'])): ?>
            <div class="invalid-feedback"><?= e($galat['email']) ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="no_hp">No. HP</label>
            <input id="no_hp" name="no_hp" type="tel"
                class="form-control <?= isset($galat['no_hp']) ? 'is-invalid' : '' ?>" value="<?= e($lama['no_hp']) ?>">
            <?php if (isset($galat['no_hp'])): ?>
            <div class="invalid-feedback"><?= e($galat['no_hp']) ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="kelas_id">Kelas</label>
            <select id="kelas_id" name="kelas_id"
                class="form-select <?= isset($galat['kelas_id']) ? 'is-invalid' : '' ?>">
                <option value="">-- Pilih kelas --</option>
                <?php foreach ($kelas as $k): ?>
                <option value="<?= (int) $k['id'] ?>"
                    <?= (int) $lama['kelas_id'] === (int) $k['id'] ? 'selected' : '' ?>>
                    <?= e($k['nama_kelas']) ?>
                </option>
                <?php endforeach; ?>
            </select>
            <?php if (isset($galat['kelas_id'])): ?>
            <div class="invalid-feedback"><?= e($galat['kelas_id']) ?></div>
            <?php endif; ?>
        </div>

        <div class="form-group">
            <label for="alamat">Alamat</label>
            <input id="alamat" name="alamat" class="form-control <?= isset($galat['alamat']) ? 'is-invalid' : '' ?>"
                value="<?= e($lama['alamat']) ?>">
            <?php if (isset($galat['alamat'])): ?>
            <div class="invalid-feedback"><?= e($galat['alamat']) ?></div>
            <?php endif; ?>
        </div>

        <div class="form-actions">
            <button type="submit" class="btn-submit">Simpan</button>
            <a href="index.php" class="btn-cancel">Batal</a>
        </div>
    </form>
</main>