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
    }
});