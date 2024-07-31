const scriptURL = 'https://script.google.com/macros/s/AKfycbxTMxeRm7RJXteTCFqFm2PcxFv5zTvfdoCaM49F9GwH2ZijXNN0fKfD6n4BtgoRyciD2g/exec';
const form = document.forms['form-bima'];
const statusMessage = document.getElementById('status-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Show initial status message
  statusMessage.innerHTML = "Data sedang di baca...";

  // Delay to simulate reading data
  setTimeout(() => {
    statusMessage.innerHTML = "Tunggu sebentar...";
  }, 2000); // 2 seconds delay

  // Delay to simulate saving data
  setTimeout(() => {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        statusMessage.innerHTML = "Data berhasil di simpan..!";

        // Show success message after status update
        Swal.fire({
          icon: 'success',
          title: 'Terima Kasih',
          text: 'Anda telah terdaftar',
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