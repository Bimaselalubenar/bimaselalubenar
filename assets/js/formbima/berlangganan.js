const scriptURL1 = 'https://script.google.com/macros/s/AKfycbw2tWMfFRw6T_ICuftlR-dwa2ZoDVcODJGrU-qO_1blLcaXtNh4ASAVgo9wTRiTcNtqzg/exec';
const form1 = document.getElementById('subscriptionForm');
const statusMessage1 = document.getElementById('status-message');

form1.addEventListener('submit', e => {
    e.preventDefault();

    statusMessage1.innerHTML = "Email sedang divalidasi...";

    setTimeout(() => {
        statusMessage1.innerHTML = "Tunggu sebentar...";
    }, 2000);

    setTimeout(() => {
        fetch(scriptURL1, { method: 'POST', body: new FormData(form1) })
            .then(response => {
                statusMessage1.innerHTML = "Anda berhasil berlangganan";
                Swal.fire({
                    icon: 'success',
                    title: 'Lakukan Pembayaran',
                    text: 'Tunggu follow up pembayaran',
                    imageUrl: 'https://bimaselalubenar.my.id/assets/img/gopay/qris.jpg',
                    imageWidth: 400, // Lebar gambar (disesuaikan jika perlu)
                    imageAlt: 'Gambar Berhasil',
                    html: `
                        <p>Lakukan pembayaran</p>
                        <a>Sebesar 35.000</a>
                        <a>✅ Lakukan konfirmasi ke admin</a>
                        <a>✅ Kirim bukti pembayaran</a>
                        <a href="https://gopay.co.id/app/scanqr?deeplink_source=request_money" class="swal2-confirm swal2-styled">Bayar dengan Gopay</a>
                    `,
                    customClass: {
                        image: 'swal-image',
                        confirmButton: 'swal-confirm-button'
                    },
                    didOpen: () => {
                        // Menambahkan style CSS untuk gambar
                        const swalImage = document.querySelector('.swal2-image');
                        if (swalImage) {
                            swalImage.style.width = '100%';
                            swalImage.style.height = 'auto';
                        }
                    }
                }).then(() => {
                    window.location.reload();
                });
            })
            .catch(error => {
                console.error('Error!', error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ada masalah, coba ulangi lagi.',
                    imageUrl: 'https://via.placeholder.com/400', // Ganti dengan URL gambar error yang sesuai
                    imageWidth: 400, // Lebar gambar
                    imageAlt: 'Gambar Error',
                    html: `
                        <p>Ada masalah, coba ulangi lagi.</p>
                        <a href="https://example.com" class="swal2-confirm swal2-styled">Kunjungi Link</a>
                    `,
                    customClass: {
                        image: 'swal-image',
                        confirmButton: 'swal-confirm-button'
                    },
                    didOpen: () => {
                        // Menambahkan style CSS untuk gambar
                        const swalImage = document.querySelector('.swal2-image');
                        if (swalImage) {
                            swalImage.style.width = '100%';
                            swalImage.style.height = 'auto';
                        }
                    }
                });
            });
    }, 90000);
});
