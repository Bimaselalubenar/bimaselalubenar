window.onload = function() {
    // Cek apakah nama pengguna sudah disimpan di localStorage
    if (!localStorage.getItem('username')) {
        // Jika belum, munculkan SweetAlert untuk meminta nama pengguna
        Swal.fire({
            title: 'Masukkan nama Anda',
            input: 'text',
            inputPlaceholder: 'Nama',
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'Anda harus memasukkan nama!';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Simpan nama pengguna ke localStorage
                localStorage.setItem('username', result.value);

                // Tampilkan nama pengguna di halaman
                document.getElementById('username').innerText = result.value;
            }
        });
    } else {
        // Ambil nama pengguna dari localStorage
        let savedUsername = localStorage.getItem('username');

        // Tampilkan nama pengguna di halaman
        document.getElementById('username').innerText = savedUsername;
    }
}
