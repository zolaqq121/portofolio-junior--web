<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Bukti Pendaftaran</title>
    <style>
        @page {
            margin: 32px;
        }

        body {
            color: #1e293b;
            font-family: DejaVu Sans, sans-serif;
            font-size: 12px;
        }

        h1 {
            margin-bottom: 4px;
            color: #172554;
            font-size: 20px;
        }

        .subtitle {
            margin-top: 0;
            color: #64748b;
        }

        table {
            width: 100%;
            margin-top: 20px;
            border-collapse: collapse;
        }

        td {
            padding: 9px 6px;
            border-bottom: 1px solid #cbd5e1;
        }

        td:first-child {
            width: 35%;
            font-weight: bold;
        }

        .printed-at {
            margin-top: 24px;
            color: #64748b;
            font-size: 10px;
        }
    </style>
</head>
<body>
    <h1>Bukti Pendaftaran</h1>
    <p class="subtitle">Nomor: <strong><?= e($nomor) ?></strong></p>
    <table>
        <tr>
            <td>Nama</td>
            <td><?= e($bukti['nama']) ?></td>
        </tr>
        <tr>
            <td>Email</td>
            <td><?= e($bukti['email']) ?></td>
        </tr>
        <tr>
            <td>No. HP</td>
            <td><?= e($bukti['no_hp']) ?></td>
        </tr>
        <tr>
            <td>Kelas</td>
            <td><?= e($bukti['nama_kelas']) ?></td>
        </tr>
        <tr>
            <td>Tanggal daftar</td>
            <td><?= e($bukti['tgl_daftar']) ?></td>
        </tr>
    </table>
    <p class="printed-at">Dicetak pada <?= date('d-m-Y H:i') ?></p>
</body>
</html>