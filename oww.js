document.getElementById('tombol').addEventListener('click', function() {
    // Mengaktifkan scroll pada body
    document.body.style.overflow= 'auto';

    // Menggulir ke bawah dengan halus
    document.getElementById('garuda').scrollIntoView({ behavior: 'smooth'});
});