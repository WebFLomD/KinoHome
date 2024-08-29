document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.popular-poster');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const slideInterval = 10000;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    let timer = setInterval(nextSlide, slideInterval);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(timer);
            currentIndex = index;
            showSlide(currentIndex);
            timer = setInterval(nextSlide, slideInterval);
        });
    });
});