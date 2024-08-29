function cekBeratBadan(event) {
            event.preventDefault(); // Mencegah pengiriman form

            // Tampilkan loading
            document.getElementById('loading').style.display = 'block';
            document.getElementById('result').style.display = 'none';

            // Simulasi waktu pemrosesan
            setTimeout(function() {
                const nama = document.getElementById('nama').value;
                const usia = document.getElementById('usia').value;
                const tinggi = document.getElementById('tinggi').value;
                const jenisKelamin = document.getElementById('jenisKelamin').value;
                const berat = document.getElementById('berat').value;

                // Menghitung BMI
                const tinggiMeter = tinggi / 100;
                const bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(2);

                // Menentukan status berat badan
                let status = '';
                let beratIdeal = 0;
                let estimasiWaktuDiet = '';
                let totalKalori = 0;
                let kebutuhanProtein = 0;
                let kebutuhanCairan = 0;
                let kebutuhanLemak = 0;
                let kebutuhanKarbo = 0;
                let rekomendasiMakanan = '';
                let makananHindari = '';
                let buahCocok = '';

                if (bmi < 18.5) {
                    status = 'Berat badan kurang';
                    beratIdeal = 18.5 * (tinggiMeter * tinggiMeter);
                    estimasiWaktuDiet = 'Naikkan berat badan Anda dengan mengonsumsi lebih banyak kalori sehat selama beberapa bulan.';
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    status = 'Berat badan ideal';
                    beratIdeal = berat;
                    estimasiWaktuDiet = 'Pertahankan berat badan Anda saat ini dengan menjaga pola makan dan olahraga yang seimbang.';
                } else if (bmi >= 25 && bmi < 29.9) {
                    status = 'Berat badan berlebih';
                    beratIdeal = 24.9 * (tinggiMeter * tinggiMeter);
                    estimasiWaktuDiet = 'Kurangi berat badan Anda dengan mengurangi asupan kalori dan meningkatkan aktivitas fisik selama beberapa bulan.';
                } else {
                    status = 'Obesitas';
                    beratIdeal = 24.9 * (tinggiMeter * tinggiMeter);
                    estimasiWaktuDiet = 'Sangat disarankan untuk menurunkan berat badan dengan bantuan ahli gizi atau dokter selama beberapa bulan hingga setahun.';
                }

                totalKalori = beratIdeal * 24 * 1.2; // Estimasi kebutuhan kalori per hari (1.2 adalah faktor aktivitas rendah)
                kebutuhanProtein = beratIdeal * 0.8; // Kebutuhan protein per kg berat badan ideal
                kebutuhanCairan = beratIdeal * 35; // Kebutuhan cairan dalam ml per kg berat badan ideal
                kebutuhanLemak = totalKalori * 0.25 / 9; // Kebutuhan lemak dalam gram
                kebutuhanKarbo = (totalKalori - (kebutuhanProtein * 4 + kebutuhanLemak * 9)) / 4; // Kebutuhan karbohidrat dalam gram

                // Rekomendasi makanan berdasarkan status berat badan
                if (bmi < 18.5) {
                    rekomendasiMakanan = 'Tingkatkan asupan kalori dengan makanan berenergi tinggi dan protein.';
                    makananHindari = 'Hindari makanan rendah kalori dan jangan lewatkan makan.';
                    buahCocok = 'Alpukat, pisang, anggur.';
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    rekomendasiMakanan = 'Pertahankan pola makan seimbang dengan variasi makanan dari semua kelompok pangan.';
                    makananHindari = 'Tidak ada makanan yang perlu dihindari, tetapi tetap jaga porsi makan.';
                    buahCocok = 'Semua jenis buah.';
                } else if (bmi >= 25) {
                    rekomendasiMakanan = 'Konsumsi makanan rendah kalori seperti sayuran hijau, protein tanpa lemak, dan gandum utuh.';
                    makananHindari = 'Hindari makanan tinggi lemak dan gula seperti gorengan, minuman manis, dan makanan olahan.';
                    buahCocok = 'Apel, pir, berry.';
                }

                // Menghitung perbedaan berat badan
                const perubahanBerat = (beratIdeal - berat).toFixed(2);

                // Menampilkan hasil
                document.getElementById('outputNama').innerText = nama;
                document.getElementById('outputUsia').innerText = usia;
                document.getElementById('outputTinggi').innerText = tinggi;
                document.getElementById('outputJenisKelamin').innerText = jenisKelamin === 'male' ? 'Pria' : 'Wanita';
                document.getElementById('outputBerat').innerText = berat;
                document.getElementById('outputBMI').innerText = bmi;
                document.getElementById('outputStatus').innerText = status;
                document.getElementById('outputBeratIdeal').innerText = beratIdeal.toFixed(2);
                document.getElementById('outputPerubahanBerat').innerText = perubahanBerat > 0 
                    ? `+${perubahanBerat} kg` 
                    : `${perubahanBerat} kg`;
                document.getElementById('outputEstimasiWaktu').innerText = estimasiWaktuDiet;
                document.getElementById('outputKalori').innerText = totalKalori.toFixed(2);
                document.getElementById('outputProtein').innerText = kebutuhanProtein.toFixed(2);
                document.getElementById('outputCairan').innerText = kebutuhanCairan.toFixed(2);
                document.getElementById('outputLemak').innerText = kebutuhanLemak.toFixed(2);
                document.getElementById('outputKarbo').innerText = kebutuhanKarbo.toFixed(2);
                document.getElementById('outputRekomendasiMakanan').innerText = rekomendasiMakanan;
                document.getElementById('outputMakananHindari').innerText = makananHindari;
                document.getElementById('outputBuahCocok').innerText = buahCocok;

                // Menampilkan hasil dan menyembunyikan loading
                document.getElementById('loading').style.display = 'none';
                document.getElementById('result').style.display = 'block';

            }, 2000); // Simulasi penundaan 2 detik
        }