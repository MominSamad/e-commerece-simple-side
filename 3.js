const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.style.transform = `translateX(0)`;
        } else {
            slide.classList.remove('active');
            slide.style.transform = `translateX(-100%)`;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

showSlide(currentSlide);
