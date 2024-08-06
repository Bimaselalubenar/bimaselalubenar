const scriptURL1 = 'https://script.google.com/macros/s/AKfycbwu85Kj_DIODNcgxmPxf78oaFP6npM6A_C0WmMKm6NNC2FP3hA6pCiNGsA7860_0D34/exec';
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
                            title: 'Registrasi berhasil',
                            text: 'Tunggu 1x24 Jam',
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