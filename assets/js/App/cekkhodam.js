src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js"

const khodams = [
    { name: "Angsa Bijak", meaning: "Khodam Angsa Bijak, sosok yang penuh kebijaksanaan dan kelembutan. Dikenal karena dapat memberikan nasihat bijak dalam situasi sulit." },
    { name: "Serigala Penjaga", meaning: "Khodam Serigala Penjaga, pelindung malam yang setia dan selalu waspada. Ia menjaga mereka yang tersesat dalam kegelapan." },
    { name: "Kucing Pemikat", meaning: "Khodam Kucing Pemikat, makhluk yang penuh misteri dan pesona. Dikenal dengan kemampuannya untuk menarik perhatian dan mencuri hati." },
    { name: "Naga Api", meaning: "Khodam Naga Api, makhluk kuat yang mengendalikan api dan energi. Ia memberikan keberanian dan kekuatan bagi mereka yang lemah." },
    { name: "Gajah Suci", meaning: "Khodam Gajah Suci, simbol kekuatan dan kestabilan. Ia membantu dalam perjalanan spiritual dan pencarian makna hidup." },
    { name: "Merpati Damai", meaning: "Khodam Merpati Damai, pembawa pesan perdamaian dan harmoni. Ia membantu menenangkan hati yang gelisah dan membawa kedamaian." },
    { name: "Harimau Putih", meaning: "Khodam Harimau Putih, simbol keberanian dan kekuatan dalam menghadapi tantangan. Ia menjadi pelindung bagi mereka yang membutuhkan." },
    { name: "Rusa Lembut", meaning: "Makhluk yang tenang dan penuh kasih sayang. Ia membantu menenangkan jiwa yang gelisah dan menuntun menuju ketenangan." },
    { name: "Elang Emas", meaning: "Pengawas yang tajam dan penuh wawasan. Ia memberikan penglihatan jauh dan kemampuan untuk melihat yang tak terlihat." },
    { name: "Singa Berani", meaning: "Simbol keberanian dan ketegasan. Ia menginspirasi keberanian dalam menghadapi rasa takut dan ketidakpastian." },
    { name: "Burung Hantu Bijaksana", meaning: "Penjaga malam yang penuh pengetahuan. Ia memberikan wawasan dalam kegelapan dan kebijaksanaan dalam keputusan." },
    { name: "Kuda Langit", meaning: "Pembawa kabar baik dan perubahan. Ia membantu dalam transisi dan perjalanan menuju masa depan yang lebih baik." },
    { name: "Ikan Mas Pemikat", meaning: "Simbol keberuntungan dan kemakmuran. Ia membawa rezeki dan kebahagiaan bagi mereka yang bersamanya." },
    { name: "Monyet Cerdik", meaning: "Penuh kecerdikan dan kelincahan. Ia membantu dalam menemukan solusi kreatif dan mengatasi hambatan." },
    { name: "Tupai Cepat", meaning: "Makhluk yang lincah dan penuh semangat. Ia membantu dalam menghadapi tantangan dengan cepat dan efisien." },
    { name: "Anjing Setia", meaning: "Pelindung yang penuh loyalitas. Ia selalu siap melindungi dan mendampingi mereka yang setia." },
    { name: "Kupu-kupu Cahaya", meaning: "Simbol transformasi dan keindahan. Ia membantu dalam proses perubahan dan pencarian jati diri." },
    { name: "Beruang Kuat", meaning: "Pelindung yang penuh kekuatan dan keteguhan. Ia memberikan perlindungan dan dukungan dalam situasi sulit." },
    { name: "Kelinci Pemberani", meaning: "Makhluk yang lincah dan pemberani. Ia membantu menghadapi ketakutan dengan keberanian dan ketenangan." },
    { name: "Kura-kura Bijak", meaning: "Simbol kesabaran dan kebijaksanaan. Ia menuntun dalam perjalanan panjang menuju kesuksesan dan kedamaian." },
    { name: "Ular Sakti", meaning: "Makhluk yang penuh misteri dan kekuatan tersembunyi. Ia membantu dalam penyembuhan dan pemahaman diri." },
    { name: "Srigala Emas", meaning: "Pelindung yang penuh kebijaksanaan dan kehormatan. Ia menjaga kehormatan dan integritas mereka yang setia." },
    { name: "Paus Penguasa Laut", meaning: "Simbol kekuatan dan ketenangan. Ia membantu dalam menghadapi masalah besar dengan ketenangan dan kebijaksanaan." },
    { name: "Domba Damai", meaning: "Simbol kelembutan dan kedamaian. Ia membantu dalam menciptakan harmoni dan ketenangan dalam hidup." },
    { name: "Lebah Pekerja", meaning: "Makhluk yang rajin dan berdedikasi. Ia membantu dalam mencapai tujuan melalui kerja keras dan kerjasama." },
    { name: "Lumba-lumba Ceria", meaning: "Makhluk yang penuh keceriaan dan kebahagiaan. Ia membawa kebahagiaan dan keceriaan kepada mereka yang berada di sekitarnya." },
    { name: "Kuda Hitam", meaning: "Simbol kekuatan dan misteri. Ia membantu dalam perjalanan menuju tujuan yang sulit dan penuh tantangan." },
    { name: "Rajawali Gagah", meaning: "Simbol kebebasan dan kekuatan. Ia memberikan kekuatan dan keberanian untuk mengejar impian." },
    { name: "Banteng Kuat", meaning: "Simbol kekuatan dan keteguhan. Ia membantu dalam menghadapi tantangan dengan keberanian dan ketegasan." },
    { name: "Pinguin Setia", meaning: "Makhluk yang penuh dedikasi dan kesetiaan. Ia selalu mendampingi dan mendukung dalam setiap langkah." },
    { name: "Gorila Kuat", meaning: "Simbol kekuatan dan keteguhan hati. Ia membantu dalam menghadapi tantangan besar dengan kekuatan dan keberanian." },
    { name: "Burung Merak", meaning: "Simbol keindahan dan kebanggaan. Ia membantu dalam menemukan kepercayaan diri dan kebanggaan dalam diri." },
    { name: "Buaya Sabar", meaning: "Makhluk yang penuh kesabaran dan keteguhan. Ia membantu dalam menunggu saat yang tepat untuk bertindak." },
    { name: "Gajah Pelindung", meaning: "Simbol kekuatan dan perlindungan. Ia selalu siap melindungi mereka yang membutuhkan perlindungan." },
    { name: "Tikus Cepat", meaning: "Makhluk yang lincah dan penuh energi. Ia membantu dalam menemukan jalan keluar dari situasi sulit dengan cepat." },
    { name: "Kanguru Lincah", meaning: "Makhluk yang penuh semangat dan kelincahan. Ia membantu dalam menghadapi tantangan dengan semangat dan keceriaan." },
    { name: "Ular Emas", meaning: "Simbol kekayaan dan kesuksesan. Ia membantu dalam menarik keberuntungan dan kemakmuran." },
    { name: "Kelelawar Malam", meaning: "Pelindung malam yang penuh misteri. Ia membantu dalam menghadapi ketakutan dalam kegelapan." },
    { name: "Elang Perkasa", meaning: "Simbol kekuatan dan keberanian. Ia membantu dalam menghadapi tantangan dengan keberanian dan ketegasan." },
    { name: "Macan Hitam", meaning: "Makhluk yang penuh kekuatan dan keberanian. Ia membantu dalam menghadapi ketakutan dan tantangan dengan keberanian." },
    { name: "Kumbang Besi", meaning: "Makhluk yang penuh kekuatan dan keteguhan. Ia membantu dalam menghadapi tantangan dengan ketegasan dan keberanian." },
    { name: "Paus Putih", meaning: "Simbol kebijaksanaan dan ketenangan. Ia membantu dalam menghadapi masalah besar dengan kebijaksanaan dan ketenangan." },
    { name: "Kuda Laut", meaning: "Makhluk yang penuh kedamaian dan ketenangan. Ia membantu dalam menemukan ketenangan dan kedamaian dalam hidup." },
    { name: "Kupu-kupu Emas", meaning: "Simbol transformasi dan keindahan. Ia membantu dalam proses perubahan dan pencarian jati diri." },
    { name: "Kura-kura Pelindung", meaning: "Simbol kesabaran dan perlindungan. Ia membantu dalam menjaga keselamatan dan memberikan perlindungan." },
    { name: "Kucing Hitam", meaning: "Makhluk yang penuh misteri dan pesona. Ia membantu dalam melindungi dari bahaya tersembunyi." },
    { name: "Srigala Bulan", meaning: "Khodam Srigala Bulan, makhluk malam yang memiliki hubungan khusus dengan bulan. Ia memberikan kekuatan dan ketenangan dalam kegelapan." },
    { name: "Harimau Malam", meaning: "Khodam Harimau Malam, pelindung yang beroperasi di malam hari. Ia memberikan keberanian dan kekuatan dalam situasi yang paling menakutkan." },
    { name: "Merak Emas", meaning: "Khodam Merak Emas, simbol kemewahan dan keanggunan. Ia membawa keindahan dan pesona bagi mereka yang didekatinya." },
    { name: "Singa Matahari", meaning: "Khodam Singa Matahari, simbol kekuatan dan kehangatan. Ia memberikan semangat dan keberanian untuk menghadapi hari-hari yang sulit." },
    { name: "Burung Pelangi", meaning: "Khodam Burung Pelangi, makhluk yang penuh warna dan keceriaan. Ia membawa kebahagiaan dan harapan dalam hidup seseorang." },
    { name: "Kuda Angin", meaning: "Khodam Kuda Angin, pelari cepat yang dapat melintasi jarak jauh dalam sekejap. Ia membantu dalam perjalanan dan pencapaian tujuan dengan cepat." },
    { name: "Naga Hitam", meaning: "Khodam Naga Hitam, simbol kekuatan dan misteri yang mendalam. Ia membantu dalam menghadapi tantangan yang tidak diketahui dan tersembunyi." },
    { name: "Kucing Bermata Biru", meaning: "Khodam Kucing Bermata Biru, makhluk yang memiliki intuisi kuat dan penglihatan tajam. Ia membantu dalam melihat hal-hal yang tersembunyi dan memahami perasaan yang dalam." },
    { name: "Elang Hitam", meaning: "Khodam Elang Hitam, simbol kebebasan dan pengawasan yang tajam. Ia memberikan pandangan yang luas dan kemampuan untuk mengamati dengan cermat." },
    { name: "Ikan Pari Suci", meaning: "Khodam Ikan Pari Suci, penjaga kedamaian lautan. Ia memberikan ketenangan dan keseimbangan bagi jiwa yang gelisah." },
    { name: "Gajah Emas", meaning: "Khodam Gajah Emas, simbol kebijaksanaan dan kekuatan yang tak tertandingi. Ia membawa keberuntungan dan kekuatan dalam menjalani hidup." },
    { name: "Serigala Biru", meaning: "Khodam Serigala Biru, simbol loyalitas dan persahabatan. Ia selalu berada di sisi mereka yang setia, memberikan dukungan dan perlindungan." },
    { name: "Kelinci Perak", meaning: "Khodam Kelinci Perak, makhluk yang penuh pesona dan keceriaan. Ia membawa keberuntungan dan kebahagiaan bagi mereka yang didekatinya." },
    { name: "Tupai Emas", meaning: "Khodam Tupai Emas, makhluk yang lincah dan cerdas. Ia membantu dalam mencari solusi cepat dan efektif untuk setiap masalah." },
    { name: "Harimau Putih Suci", meaning: "Khodam Harimau Putih Suci, pelindung yang penuh dengan kekuatan suci. Ia membantu dalam menghadapi tantangan dengan kekuatan spiritual." },
    { name: "Naga Biru", meaning: "Khodam Naga Biru, simbol kekuatan dan ketenangan. Ia membantu dalam menghadapi situasi sulit dengan kebijaksanaan dan ketegasan." },
    { name: "Kuda Terbang", meaning: "Khodam Kuda Terbang, simbol kebebasan dan petualangan. Ia membantu dalam mencapai tujuan yang jauh dan melampaui batasan." },
    { name: "Gorila Perkasa", meaning: "Khodam Gorila Perkasa, simbol kekuatan fisik dan mental. Ia membantu dalam menghadapi tantangan besar dengan keberanian dan keteguhan hati." },
    { name: "Kucing Emas", meaning: "Khodam Kucing Emas, simbol keberuntungan dan pesona. Ia membawa keberuntungan dan kebaikan bagi mereka yang mempercayainya." },
    { name: "Ular Perak", meaning: "Khodam Ular Perak, makhluk yang penuh dengan kekuatan penyembuhan. Ia membantu dalam penyembuhan fisik dan spiritual." },
    { name: "Srigala Putih", meaning: "Khodam Srigala Putih, pelindung yang penuh dengan kebijaksanaan dan kekuatan spiritual. Ia menjaga mereka yang membutuhkan bimbingan dalam hidup." },
    { name: "Merpati Putih", meaning: "Khodam Merpati Putih, simbol kedamaian dan cinta. Ia membawa harmoni dan ketenangan bagi mereka yang mencarinya." },
    { name: "Rajawali Perak", meaning: "Khodam Rajawali Perak, simbol kekuatan dan kebebasan. Ia memberikan kemampuan untuk melihat jauh ke depan dan mengambil keputusan dengan bijak." },
    { name: "Kucing Kuning", meaning: "Khodam Kucing Kuning, simbol keceriaan dan keberuntungan. Ia membawa kebahagiaan dan keceriaan dalam hidup mereka yang dekat dengannya." },
    { name: "Banteng Merah", meaning: "Khodam Banteng Merah, simbol kekuatan dan keberanian. Ia membantu dalam menghadapi tantangan besar dengan keteguhan dan keberanian." },
    { name: "Elang Merah", meaning: "Khodam Elang Merah, pelindung yang penuh dengan semangat dan keberanian. Ia memberikan kekuatan dan keberanian untuk menghadapi tantangan hidup." },
    { name: "Burung Merah", meaning: "Khodam Burung Merah, simbol semangat dan kekuatan. Ia membawa semangat dan kekuatan untuk menghadapi hari-hari yang sulit." },
    { name: "Harimau Emas", meaning: "Khodam Harimau Emas, simbol keberanian dan kekuatan. Ia memberikan kekuatan dan keberanian untuk menghadapi ketakutan dan rintangan." },
    { name: "Naga Merah", meaning: "Khodam Naga Merah, simbol kekuatan dan keberanian. Ia memberikan kekuatan dan keberanian untuk menghadapi tantangan hidup dengan percaya diri." },
    { name: "Kuda Putih", meaning: "Khodam Kuda Putih, simbol kemurnian dan kebebasan. Ia membantu dalam mencapai tujuan dengan kemurnian hati dan ketulusan." },
    { name: "Singa Merah", meaning: "Khodam Singa Merah, simbol kekuatan dan keberanian. Ia memberikan kekuatan dan keberanian untuk menghadapi rintangan yang paling sulit." },
    { name: "Kucing Putih", meaning: "Khodam Kucing Putih, simbol kemurnian dan kebijaksanaan. Ia membawa kebijaksanaan dan ketenangan bagi mereka yang didekatinya." },
    { name: "Kelinci Hitam", meaning: "Khodam Kelinci Hitam, simbol misteri dan kecerdasan. Ia membantu dalam menemukan jalan keluar dari situasi yang sulit dengan kecerdasan dan kebijaksanaan." },
    { name: "Srigala Hitam", meaning: "Khodam Srigala Hitam, pelindung yang penuh dengan kekuatan dan keteguhan hati. Ia menjaga mereka yang membutuhkan perlindungan dalam hidup." },
    { name: "Harimau Biru", meaning: "Khodam Harimau Biru, simbol ketenangan dan kekuatan. Ia membantu dalam menghadapi tantangan dengan ketenangan dan kekuatan yang dalam." },
    { name: "Naga Putih", meaning: "Khodam Naga Putih, simbol kemurnian dan kebijaksanaan. Ia membawa kebijaksanaan dan kedamaian bagi mereka yang mencarinya." },
    { name: "Elang Putih", meaning: "Khodam Elang Putih, pelindung yang penuh dengan kebijaksanaan dan penglihatan yang tajam. Ia membantu dalam melihat jauh ke depan dan mengambil keputusan dengan bijak." },
    { name: "Kucing Biru", meaning: "Khodam Kucing Biru, simbol ketenangan dan kedamaian. Ia membawa ketenangan dan kedamaian bagi mereka yang didekatinya." },
    { name: "Singa Putih", meaning: "Khodam Singa Putih, simbol kemurnian dan kekuatan. Ia membantu dalam menghadapi tantangan dengan ketenangan dan keberanian." },
    { name: "Kuda Biru", meaning: "Khodam Kuda Biru, simbol kebebasan dan ketenangan. Ia membantu dalam mencapai tujuan dengan ketenangan dan kebebasan hati." },
    { name: "Gajah Hitam", meaning: "Khodam Gajah Hitam, simbol kekuatan dan keteguhan hati. Ia membantu dalam menghadapi tantangan dengan keteguhan dan kekuatan." },
    { name: "Naga Hijau", meaning: "Khodam Naga Hijau, simbol kehidupan dan kebijaksanaan. Ia membantu dalam menemukan jalan yang benar dan menjaga keseimbangan hidup." },
    { name: "Srigala Perak", meaning: "Khodam Srigala Perak, simbol kesetiaan dan perlindungan. Ia menjaga mereka yang setia dan memberikan perlindungan dalam hidup." },
    { name: "Harimau Hijau", meaning: "Khodam Harimau Hijau, simbol kekuatan dan kesuburan. Ia membantu dalam menghadapi tantangan hidup dengan kekuatan dan ketahanan." },
    { name: "Elang Biru", meaning: "Khodam Elang Biru, simbol kebebasan dan penglihatan yang tajam. Ia membantu dalam melihat jauh ke depan dan mengambil keputusan dengan bijak." },
    { name: "Singa Hijau", meaning: "Khodam Singa Hijau, simbol kekuatan dan keseimbangan. Ia membantu dalam menghadapi tantangan dengan kekuatan dan ketenangan." },
    { name: "Naga Emas", meaning: "Khodam Naga Emas, simbol kemakmuran dan kekuatan. Ia membawa kekayaan dan kekuatan bagi mereka yang mempercayainya." },
    // Tambahkan lebih banyak khodam sesuai keinginan
];

document.getElementById('khodam-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const inputContainer = document.getElementById('input-container');
    const loadingContainer = document.getElementById('loading-container');
    const resultContainer = document.getElementById('result-container');
    const resultNameElement = document.getElementById('result-name');
    const resultKhodamNameElement = document.getElementById('result-khodam-name');
    const resultKhodamMeaningElement = document.getElementById('result-khodam-meaning');
    const shareButton = document.getElementById('share-button');
    const retryButton = document.getElementById('retry-button');

    inputContainer.style.display = 'none';
    loadingContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    // Load Lottie Animation
    lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets6.lottiefiles.com/packages/lf20_q5pk6p1k.json' // URL of Lottie JSON animation file
    });

    setTimeout(() => {
        loadingContainer.style.display = 'none';

        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];

        // Simple hash function
        const hashCode = (str) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        };

        const index = Math.abs(hashCode(name + today)) % khodams.length;
        const selectedKhodam = khodams[index];

        resultNameElement.textContent = `${name}`;
        resultKhodamNameElement.textContent = `${selectedKhodam.name}`;
        resultKhodamMeaningElement.textContent = `${selectedKhodam.meaning}`;
        resultContainer.style.display = 'block';

        shareButton.onclick = () => {
            const shareText = `Isi khodam dalam diriku (${name}): ${selectedKhodam.name} - ${selectedKhodam.meaning}`;
            if (navigator.share) {
                navigator.share({
                    title: 'Khodam Finder',
                    text: shareText,
                    url: window.location.href
                }).catch(console.error);
            } else {
                alert('Sharing not supported in this browser.');
            }
        };

        retryButton.onclick = () => {
            inputContainer.style.display = 'block';
            resultContainer.style.display = 'none';
            document.getElementById('name').value = '';
        };
    }, 5000);
});
