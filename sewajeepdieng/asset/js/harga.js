// Daftar harga per zona
const hargaZona = {
    'z-1': 100000,  // Zona Healing
    'z-3': 120000,  // Zona Happy
    'snr': 150000,  // Sunrise
    'z-snr-1': 200000,  // Sunrise & Zona Healing
    'z-snr-3': 220000,  // Sunrise & Zona Happy
};

// Ambil elemen-elemen yang diperlukan
const paketSelect = document.getElementById('paket');
const jmlInput = document.getElementById('jml');
const hrgInput = document.getElementById('hrg');

// Fungsi untuk membulatkan harga ke atas ke kelipatan 5000 terdekat
function roundHarga(harga) {
    return Math.ceil(harga / 5000) * 5000;
}

// Fungsi untuk menghitung dan memperbarui harga
function updateHarga() {
    const selectedZona = paketSelect.value;
    const jumlahPenumpang = parseInt(jmlInput.value) || 0;
    
    if (selectedZona in hargaZona) {
        const hargaTotal = hargaZona[selectedZona];
        
        if (jumlahPenumpang < 4) {
            hrgInput.value = `Total: Rp ${hargaTotal.toLocaleString('id-ID')}`;
        } else {
            let hargaPerOrang = Math.ceil(hargaTotal / jumlahPenumpang);
            hargaPerOrang = roundHarga(hargaPerOrang);
            hrgInput.value = `Per orang: Rp ${hargaPerOrang.toLocaleString('id-ID')}`;
        }
    } else {
        hrgInput.value = '';
    }
}

// Tambahkan event listener
paketSelect.addEventListener('change', updateHarga);
jmlInput.addEventListener('input', updateHarga);

// Panggil updateHarga() saat halaman dimuat untuk menangani nilai awal
updateHarga();