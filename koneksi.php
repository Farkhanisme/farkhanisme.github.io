<?php
$host = "sql100.infinityfree.com";
$user = "epiz_31556286";
$pass = "Az3EkZBZ0k";
$data = "epiz_31556286_XXX";

$conn = mysqli_connect($host, $user, $pass, $data) or die("Connection corrupt");

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
} else {
    echo "Koneksi berhasil";
}
?>