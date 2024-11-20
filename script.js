// script.js
document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll(".category-button");
    const subCategoryGroups = document.querySelectorAll(".sub-category-group");
    const subCategoryButtons = document.querySelectorAll(".sub-category-button");
    const products = document.querySelectorAll(".product");

    let selectedCategory = "men"; // Default category
    let selectedSubCategory = ""; // No sub-category selected initially

    // Function to update displayed products
    function updateProducts() {
        products.forEach(product => {
            const productCategory = product.getAttribute("data-category");
            const productSubCategory = product.getAttribute("data-sub-category");
            if (productCategory === selectedCategory &&
                (selectedSubCategory === "" || productSubCategory === selectedSubCategory)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Event listener for main category buttons
    categoryButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedCategory = this.getAttribute("data-category");
            selectedSubCategory = ""; // Reset sub-category
            updateProducts();

            // Show the relevant sub-category buttons
            subCategoryGroups.forEach(group => {
                if (group.getAttribute("data-main-category") === selectedCategory) {
                    group.style.display = "block";
                } else {
                    group.style.display = "none";
                }
            });
        });
    });

    // Event listener for sub-category buttons
    subCategoryButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedSubCategory = this.getAttribute("data-sub-category");
            updateProducts();
        });
    });

    // Initialize product display
    updateProducts();
});


document.addEventListener('DOMContentLoaded', () => {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form validation and submission logic
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        if (name && email && message) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Slider animation
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Product category filtering
    const categoryButtons = document.querySelectorAll('.category-button');
    const products = document.querySelectorAll('.product');

    categoryButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            products.forEach((product) => {
                if (product.getAttribute('data-category') === category || category === 'all') {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const buyNowButtons = document.querySelectorAll(".buy-now");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productElement = this.closest(".product");
            const productName = productElement.querySelector("h3").textContent;
            const productPrice = productElement.querySelector("p").textContent;
            const productImage = productElement.querySelector("img").src;

            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            addToCart(product);
        });
    });

    buyNowButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productElement = this.closest(".product");
            const productName = productElement.querySelector("h3").textContent;
            const productPrice = productElement.querySelector("p").textContent;
            const productImage = productElement.querySelector("img").src;

            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            buyNow(product);
        });
    });
});

function addToCart(product) {
    cart.push(product);
    console.log(cart);
    alert(`${product.name} has been added to your cart!`);
}

function buyNow(product) {
    alert(`Proceeding to buy ${product.name} for ${product.price}.`);
    console.log(`Redirecting to checkout with ${product.name}`);
}

let cart = [];
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productElement = this.closest(".product");
            const productName = productElement.querySelector("h3").textContent;
            const productPrice = productElement.querySelector("p").textContent;
            const productImage = productElement.querySelector("img").src;

            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            addToCart(product);
        });
    });
});

function addToCart(product) {
    cart.push(product);
    console.log(cart);
    alert(`${product.name} has been added to your cart!`);
}
function addToCart(product) {
    cart.push(product);
    console.log(cart);
    alert(`${product.name} has been added to your cart!`);

    const cartItems = document.getElementById("cart-items");
    const cartItem = document.createElement("li");
    cartItem.textContent = `${product.name} - ${product.price}`;
    cartItems.appendChild(cartItem);
}