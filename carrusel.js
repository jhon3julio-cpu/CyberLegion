// Carrusel de galería — Cyber Legion
// Funciona con cualquier .carrusel que tenga .carrusel-track,
// .carrusel-slide, botones .carrusel-btn.prev/.next y .dot

document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.carrusel').forEach(function (carrusel) {

        var track = carrusel.querySelector('.carrusel-track');
        var slides = carrusel.querySelectorAll('.carrusel-slide');
        var dots = carrusel.querySelectorAll('.dot');
        var btnPrev = carrusel.querySelector('.carrusel-btn.prev');
        var btnNext = carrusel.querySelector('.carrusel-btn.next');

        var actual = 0;
        var total = slides.length;
        var autoplay;

        function irA(indice) {
            actual = (indice + total) % total;
            track.style.transform = 'translateX(-' + (actual * 100) + '%)';

            dots.forEach(function (dot, i) {
                dot.classList.toggle('activo', i === actual);
            });
        }

        function siguiente() {
            irA(actual + 1);
        }

        function anterior() {
            irA(actual - 1);
        }

        function iniciarAutoplay() {
            autoplay = setInterval(siguiente, 3000);
        }

        function detenerAutoplay() {
            clearInterval(autoplay);
        }

        function reiniciarAutoplay() {
            detenerAutoplay();
            iniciarAutoplay();
        }

        if (btnNext) {
            btnNext.addEventListener('click', function () {
                siguiente();
                reiniciarAutoplay();
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', function () {
                anterior();
                reiniciarAutoplay();
            });
        }

        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                irA(i);
                reiniciarAutoplay();
            });
        });

        carrusel.addEventListener('mouseenter', detenerAutoplay);
        carrusel.addEventListener('mouseleave', iniciarAutoplay);

        irA(0);
        iniciarAutoplay();

    });

});
