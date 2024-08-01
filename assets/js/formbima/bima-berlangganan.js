const scriptURL = 'https://script.google.com/macros/s/AKfycbwzenfn7eZkhElALrCmxDg-QMLSMKGNEotMGoypjyIFYoi-SNBiXU4oWVofA8IYpRgM/exec';
const form = document.forms['bima-berlangganan'];
const statusMessage = document.getElementById('status-message2');

form.addEventListener('submit-subscribe', e => {
  e.preventDefault();

  // Show initial status message
  statusMessage.innerHTML = "Email sedang di validasi...";

  // Delay to simulate reading data
  setTimeout(() => {
    statusMessage.innerHTML = "Tunggu sebentar...";
  }, 2000); // 2 seconds delay

  // Delay to simulate saving data
  setTimeout(() => {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        statusMessage.innerHTML = "Anda berhasil berlangganan";

        // Show success message after status update
        Swal.fire({
          icon: 'success',
          title: 'Berhasil Subscribe',
          text: 'Terima kasih telah subscribe! dapatkan informasi penting',
        }).then(() => {
          window.location.reload();
        });
      })
      .catch(error => {
        console.error('Error!', error.message);

        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sepertinya ada masalah',
        });
      });
  }, 5000); // Total 5 seconds delay for all operations
});