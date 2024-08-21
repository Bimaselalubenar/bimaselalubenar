const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

function generateCaptcha() {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
        captcha += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return captcha;
}

function refreshCaptcha() {
    const captchaElement = document.getElementById("captcha");
    captchaElement.textContent = generateCaptcha();
}

document
    .getElementById("refreshCaptcha")
    .addEventListener("click", refreshCaptcha);

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const captchaInput = document.getElementById("captchaInput").value;
    const captcha = document.getElementById("captcha").textContent;
    const user = getUserByEmail(email);

    if (captcha !== captchaInput) {
        errorMessage.innerText = "CAPTCHA salah. coba lagi.";
        refreshCaptcha();
        return;
    }

    if (user && user.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else {
        errorMessage.innerText = "Email dan Password salah.";
    }
});

// Data akun pengguna
let users = [
    { name: 'Bimaselalubenar', email: 'Admin@gmail.com', password: 'Admin', branch: 'Madiun', position: 'PIC Marketing Digital', cabang: 'MPM Madiun', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Bimaselalubenar2', email: 'Premium@gmail.com', password: 'Premium', branch: 'Madiun', position: 'PIC Marketing Digital', cabang: 'MPM Madiun', subscribed: true, expiryDate: 'lifetime' },
    { name: 'Kusumasum', email: 'Kusumabagas003@gmail.com', password: 'Kusumabagas919191', branch: 'Kota Madiun', position: 'Admin PIC Medsos MSO Madiun', cabang: 'MPM MADIUN', subscribed: false, expiryDate: null },
    { name: 'Sudibyo', email: 'mpm.madiun1@gmail.com', password: 'Pangsud91', branch: 'Kota Madiun', position: 'PDCA', cabang: 'MPM MADIUN', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Mifta', email: 'mpmngagel.sby@gmail.com', password: 'MPMh0010', branch: 'Kota Surabaya', position: 'PDCA', cabang: 'MPM NGAGEL', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Raisa Jelita', email: 'h0900.mpmmotor.surabaya@gmail.com', password: 'Mst170**', branch: 'Surabaya', position: 'PDCA', cabang: 'MPM Motor Mastrip', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Nindy Ayu Tristami', email: 'mpmbjn@gmail.com', password: 'Mpmbjn!#', branch: 'Kabupaten Bojonegoro', position: 'PIC Socmed', cabang: 'MPM Motor Bojonegoro', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Elna Kurnia Cahya', email: 'Elnaniakurnia24@gmail.com', password: 'Elnani@99', branch: 'Nganjuk', position: 'PIC Socmed', cabang: 'MPM Motor Nganjuk', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'ENNY KARTIKANING ADI', email: 'mpmmotorsukun.malang@gmail.com', password: 'Kartikaning80!?', branch: 'Malang', position: 'PDCA', cabang: 'MPM Motor Sukun', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Ferdy Okta Pramanda', email: 'pdca.kediri@gmail.com', password: 'Nop4ssword', branch: 'Kota Kediri', position: 'PDCA', cabang: 'MPM Motor Kediri', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Indirwan Djara', email: 'indirwandjara07@gmail.com', password: 'Iwan123#!', branch: 'Kota Kupang', position: 'PDCA', cabang: 'MPM Motor Kupang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'rudi ona', email: 'mpmpku.official@gmail.com', password: '1@MPMpku', branch: 'Pekanbaru', position: 'PDCA', cabang: 'MPM Motor Pekanbaru', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Hamam Nasrodin', email: 'mpm.bumibungkarno@gmail.com', password: 'Supriad!79', branch: 'Blitar', position: 'PDCA', cabang: 'MPM Motor Blitar', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'SILVESTER DIMAS SB', email: 'mpm.basra@gmail.com', password: 'mpmbasr@7173!', branch: 'Kota Malang', position: 'PDCA', cabang: 'MPM Motor Basra', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'BAKTI ARI WIJAYA', email: 'MPMMOTOR.LAROS@GMAIL.COM', password: '@jrk?49FLP', branch: 'BANYUWANGI', position: 'PDCA', cabang: 'MPM Motor Banyuwangi', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'PRITA AYU GIANING RETNOWATI', email: 'pritaayu92@gmail.com', password: 'Nop4$$word!', branch: 'SURABAYA', position: 'PIC Socmed', cabang: 'MPM Motor Simpang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'DECKY KURNIAWAN', email: 'kurniawan.decky90@gmail.com', password: 'Decky@3190', branch: 'Jombang', position: 'PDCA', cabang: 'MPM Motor Jombang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Ludfi Riyo', email: 'ludfi.riyo@gmail.com', password: 'Nop4$$word!', branch: 'Malang', position: 'PDCA', cabang: 'MPM Motor Kepanjen', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Tossy Aguk', email: 'admin.pare@mpm-motor.com', password: 'pkbangsa13C!', branch: 'Kediri', position: 'PDCA', cabang: 'MPM Motor Pare', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'MUHAMMAD DAVID SULTANSYAH', email: 'davidsultansyah@gmail.com', password: 'mpmlarangan1', branch: 'SIDOARJO', position: 'PDCA', cabang: 'MPM Motor Larangan', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Eko Saputro', email: 'ekoputra1999@gmail.com', password: 'mpmngawi2023', branch: 'Ngawi', position: 'PIC Socmed', cabang: 'MPM Motor Ngawi', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'LALU DEDY SISWARI AFRIZAL', email: 'laludedysiswariafrizal@gmail.com', password: '99Lht!@#$', branch: 'Mataram', position: 'PDCA', cabang: 'MPM Motor Mataram', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'PULUNG SIWANATA', email: 'pulung.siwanata91@gmail.com', password: 'Mpmb@b@t241!', branch: 'Lamongan', position: 'PDCA', cabang: 'MPM Motor Babat', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Afif Rizka R', email: 'Afif.rizkar@gmail.com', password: 'MpmMotorBondowoso', branch: 'Bondowoso', position: 'PDCA', cabang: 'MPM Motor Bondowoso', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'sri desi', email: 'sridesi139@gmail.com', password: 'Sridesi139', branch: 'bogor', position: 'PIC Socmed', cabang: 'MPM Motor Bogor', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'NESSIA KRISWANINGYU', email: 'nessyakriswaningyu051194@gmail.com', password: '@MPMmjk19', branch: 'MOJOKERTO', position: 'PIC Socmed', cabang: 'MPM Motor Mojokerto', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Mifta', email: 'mpmngagel.sby@gmail.com', password: 'MPMh0010', branch: 'Kota Surabaya', position: 'PDCA', cabang: 'MPM NGAGEL', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'FAHRI SETIAWAN', email: 'fahri.mpmpalu13105@gmail.com', password: 'dua+2=empat', branch: 'Palu', position: 'PDCA', cabang: 'MPM Motor Palu', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'DEVARA MARYELLA', email: 'Devaramaryella1@gmail.com', password: 'Devara1*', branch: 'Tuban', position: 'PIC Socmed', cabang: 'MPM Motor Tuban', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Defliza Widayanti', email: 'defliza96@gmail.com', password: 'D3fLiza96W', branch: 'Prabumulih', position: 'PIC Socmed', cabang: 'MPM Motor Prabumulih', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'M Rizky HIdayat', email: 'rizkydayat628@gmail.com', password: 'Smandamania@123', branch: 'Lombok Timur', position: 'PDCA', cabang: 'MPM Motor Lotim', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'NURUL AINI SIREGAR', email: 'ainisiregar0104@gmail.com', password: '@ini0104', branch: 'KOTA MEDAN', position: 'PIC Socmed', cabang: 'MPM Motor Medan', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Dodi Sujono', email: 'mpmgateway.waru@gmail.com', password: 'mpm@gateway', branch: 'Sidoarjo', position: 'PDCA', cabang: 'MPM Motor Gateway', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Fuj Andayani', email: 'fujiandayani40@gmail.com', password: 'Mpm13436!', branch: 'Pontianak', position: 'PIC Socmed', cabang: 'MPM Motor Pontianak', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'IKMAL WIDODO ', email: 'Ikmal.widodo@gmail.com', password: 'Mpmr30G0010', branch: 'Ponorogo', position: 'PDCA', cabang: 'MPM Motor Ponorogo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'ERIS SAFITRI MARDIANA', email: 'jembermpmkebonsari@gmail.com', password: 'MpmKebonsariJember', branch: 'JEMBER', position: 'PDCA', cabang: 'MPM Motor Jember Kebonsari', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Hafeed syaif ali', email: 'aphied.aliali@gmail.com', password: 'Hafeedmpm203', branch: 'Kota tangerang', position: 'PDCA', cabang: 'MPM Motor Tangerang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'EVIANA ZULAIKHOH', email: 'mpmmotortulungagung.pdca@gail.com', password: '3VI@NA1984', branch: 'Kota Tulungagung', position: 'PIC Socmed', cabang: 'MPM Motor Tulungagung', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Benny Rahmatillah', email: 'pasuruan.mpm@gmail.com', password: 'Kertas@4', branch: 'Pasuruan', position: 'PDCA', cabang: 'MPM Motor Pasuruan', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Bhastian Juniardi Setiawan', email: 'bhast14n@gmail.com', password: 'BH4571AN', branch: 'Kota Pasuruan', position: 'PIC Socmed', cabang: 'MPM Motor Sukorejo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Alfian', email: 'mpm.gresik@gmail.com', password: 'gresik', branch: 'Gresik', position: 'PIC SOCMED', cabang: 'MPM MOTOR GRESIK', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'indah permata sari', email: 'admin.batam@mpm-motor.com', password: 'admin123!', branch: 'kota batam', position: 'PDCA', cabang: 'MSO Batam', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Puspia cwantik', email: 'puspiaku@gmail.com', password: 'puspus', branch: 'MADIUN', position: 'COUNTER SALES', cabang: 'MPM MADIUN', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Ahmad Khoirun', email: 'ahmadkhoirun92@gmail.com', password: 'uunmpm92', branch: 'Tuban', position: 'PIC SOCMED', cabang: 'Tuban', subscribed: false, expiryDate: '2024-08-30' },
	{ name: 'Reny Kusumawati', email: 'renykusumawati146@gmail.com', password: '12345678', branch: 'Kota Madiun', position: 'Management Call', cabang: 'MPM Madiun', subscribed: false, expiryDate: '2024-08-30' },
    { name: '', email: '', password: '', branch: '', position: '', cabang: '', subscribed: false, expiryDate: '2024-08-30' },
    // SALES
    { name: 'DEDE MARLINA', email: 'dedechubbii@gmail.com', password: 'Dedempm203', branch: 'Kota Tangerang', position: 'Sales Online', cabang: 'MPM Motor Tangerang', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Wahyu jadmiko', email: 'Wahyujat70@gmail.com', password: 'wahyu12345', branch: 'Nganjuk', position: 'Sales Online', cabang: 'MPM Motor Nganjuk', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Sinta dwi cahyani', email: 'sintacika01@gmail.com', password: 'sinta1', branch: 'Malang', position: 'Sales Online', cabang: 'MPM Motor Kediri', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Rochmanul karim', email: 'rochmanulkarim1@gmail.com', password: 'Cakkarim07@', branch: 'KAB. PASURUAN', position: 'SALES ONLINE', cabang: 'mpm sukorejo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'AJI ADITYA PRAMANA', email: 'ajiapram4@gmail.com', password: 'ajiap1234', branch: 'KAB PASURUAN', position: 'KAB PASURUAN', cabang: 'MPM SUKOREJO', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Rizky firmansyah', email: 'firmansyahrizky423@gmail.com', password: 'Rafly22', branch: 'KAB PASURUAN', position: 'SALES ONLINE', cabang: 'Sukorejo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'Linatul Husna', email: 'linahusna62@gmail.com', password: '123240', branch: 'Pasuruan', position: 'SALES ONLINE', cabang: 'MPM Motor Sukorejo', subscribed: false, expiryDate: '2024-08-30' },
    { name: 'EKO ARI WIBOWO', email: 'datacrm4245@gmail.com', password: 'sosmedMPMdipo4245', branch: 'JEMBER', position: 'ADMIN CRM', cabang: 'MPM DIPONEGORO JEMBER', subscribed: false, expiryDate: '2024-08-30' },
    { name: '', email: '', password: '', branch: '', position: '', cabang: '', subscribed: false, expiryDate: '2024-08-30' },
    { name: '', email: '', password: '', branch: '', position: '', cabang: '', subscribed: false, expiryDate: '2024-08-30' },
    // SPESIAL
    { name: 'Taufik', email: 'User2@supper.com', password: 'User2supper', branch: '-', position: '-', cabang: '-', subscribed: false, expiryDate: '2024-08-30' },
    // Rapikan code dengan Shift + Alt + F
];

function getUserByEmail(email) {
    return users.find((user) => user.email === email);
}

// Inisialisasi CAPTCHA saat halaman dimuat
refreshCaptcha();