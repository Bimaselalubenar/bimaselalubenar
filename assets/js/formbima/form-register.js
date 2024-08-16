const scriptURL1 = 'https://script.google.com/macros/s/AKfycbzr_2rLRbFSMH5gguctrOwTRLdGjdn2Eo_n7L8yBEyHl6G0l5xCuwlFw2CFfgWnE19h/exec';
        const form1 = document.getElementById('registerakun');
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
                            title: 'Pesan anda terkirim',
                            text: 'Terimakasih! pesan anda akan kami balas segera mungkin',
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
                        });
                    });
            }, 5000);
        });