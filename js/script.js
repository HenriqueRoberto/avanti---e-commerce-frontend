function toggleMenu() {
    const nav = document.querySelector('.category-nav .nav');
    nav.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        rewind: true,
        navigation: {
            nextEl: ".carousel-control-next",
            prevEl: ".carousel-control-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });




    // Busca
    const form = document.querySelector('.input-group');
    const input = form.querySelector('input');
    const result = document.getElementById('search-result');

    form.style.position = 'relative'; // importante para posicionamento absoluto

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = input.value.trim();

        if (query !== '') {
            result.textContent = `Você buscou por: "${query}"`;
            result.classList.add('show');
        } else {
            result.textContent = '';
            result.classList.remove('show');
        }
    });

    // Ocultar ao clicar fora
    document.addEventListener('click', (e) => {
        if (!form.contains(e.target)) {
            result.classList.remove('show');
        }
    });
    document.querySelectorAll('.dropdown-toggle-footer').forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentElement.classList.toggle('active');
        });
    });


});