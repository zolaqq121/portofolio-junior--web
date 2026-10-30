<?php 
declare(strict_types=1);

if (session_status() === PHP_SESSION_NONE) {
session_start();
}

$konfigurasi = require __DIR__ . '/../proyek-5-capstone-pendaftaran/config/config.php';
ini_set('display_errors', $konfigurasi['debug'] ? '1' : '0');
error_reporting(E_ALL);

require_once __DIR__ . '/../proyek-5-capstone-pendaftaran/config/database.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/pendaftar.php';

set_exception_handler(function (Throwable $e): void {
error_log($e->getMessage());
http_response_code(500);
echo 'Terjadi kesalahan pada sistem. Silakan coba lagi.';
}); 