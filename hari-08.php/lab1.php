<?php
declare(strict_types=1);
//mencetak keterangan nama,umur,status
$nama = 'sari';
$umur = '25';
$status = 'mahasigma';
echo 'halo, saya ' . $nama . 'umur' . $umur . ' tahun dapean status saya ' . ' </br>';
//tampil var_dum tiap variable
var_dump($nama, $umur, $status);
//
echo '<table border="1"> ';
for ($i = 1; $i <= 10; $i++) {
    echo '<tr> ';
    for ($j = 1; $j <= 10; $j++) {
        echo '<td> '. ($i * $j) . '</td>';
    }
    echo '</tr> ';
}
echo '</table>';

echo '<h3>Bilangan Ganjil dan Genap 1-20</h3>'; 
echo '<p>Ganjil: ';
for ($i = 1; $i <= 20; $i += 2) {
    echo $i . '';
}
echo '</p';
echo '<p>Genap: ';
for ($i = 2; $i <= 20; $i += 2) {
    echo $i . '';
}
?>
<p>Waktu server; <?= date('d-m-Y H:i') ?></p>/