document.addEventListener('DOMContentLoaded', () => {
    // Memilih semua tautan navigasi yang href-nya dimulai dengan '#'
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Menerapkan 'for...of' loop yang lebih modern dan seringkali lebih efisien
    for (const link of navLinks) {
        link.addEventListener('click', (event) => {
            // Mencegah perilaku default browser (loncat ke ID)
            event.preventDefault();

            // Mendapatkan ID target dari atribut href, tanpa perlu memeriksa keberadaan tautan
            const targetId = link.getAttribute('href');
            
            // Menggunakan 'scrollIntoView' sebagai alternatif yang lebih modern dan fleksibel
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
        // Menambahkan kelas 'active' pada tautan yang diklik dan menghapusnya dari tautan lainnya
        link.addEventListener('click', () => {
            for (const otherLink of navLinks) {
                otherLink.classList.remove('active');
            }
            link.classList.add('active');
        });
        // Menambahkan event listener untuk mengubah warna tautan saat diklik
        link.addEventListener('click', () => {
            link.style.color = 'red'; // Ganti dengan warna yang diinginkan
        });
        // Menambahkan event listener untuk mengubah warna tautan saat mouse hover
        link.addEventListener('mouseover', () => {
            link.style.color = 'blue'; // Ganti dengan warna yang diinginkan
        });
        link.addEventListener('mouseout', () => {
            link.style.color = ''; // Kembalikan ke warna default
        });
    }
});
