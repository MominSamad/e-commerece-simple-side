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


 // JavaScript to toggle the visibility of subcategories
 const categoryButtons = document.querySelectorAll('.category-button');

 categoryButtons.forEach(button => {
     button.addEventListener('click', () => {
         // Get the category from the button's data attribute
         const category = button.getAttribute('data-category');
         const subcategorySection = document.getElementById(`${category}-subcategories`);

         // Toggle the display of the subcategory section
         if (subcategorySection.style.display === 'none' || subcategorySection.style.display === '') {
             subcategorySection.style.display = 'block';
         } else {
             subcategorySection.style.display = 'none';
         }
     });
 });

    