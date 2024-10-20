<?php
// URL yang diminta
$request_uri = $_SERVER['REQUEST_URI'];

// Path file yang akan dicek
$path = __DIR__ . $request_uri;

// Cek apakah file atau direktori tersebut ada
if (!file_exists($path) || is_dir($path)) {
    // Jika file tidak ditemukan atau itu adalah direktori, arahkan ke halaman 404
    header("HTTP/1.0 404 Not Found");
    include('404.html');
    exit;
}

// Jika file ditemukan, bisa di-include atau diproses sesuai kebutuhan
include($path);
?>
