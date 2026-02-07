// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// N8N Chat Widget handles all chatbot functionality automatically
// No custom chatbot code needed!

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Product Modal (placeholder for future implementation)
function openProductModal(productId) {
    alert(`Product ${productId} details will be shown here. This feature can be enhanced with a proper modal.`);
}

// Add to Cart - Opens n8n chat with product enquiry
function addToCart(productId) {
    const productNames = {
        1: 'Royal Crystal Jhumar',
        2: 'Golden Empire Chandelier',
        3: 'Modern Luxury Pendant',
        4: 'Vintage Palace Jhumar',
        5: 'Diamond Cascade Chandelier',
        6: 'Classic Heritage Jhumar'
    };

    // N8N chat widget will handle the interaction
    // You can trigger it programmatically if needed
    alert(`Opening chat for ${productNames[productId]}. Please use the chat widget to inquire.`);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add product images dynamically from local assets folder
const productImages = {
    product1: 'assets/images/products/product%20(1).jpeg',
    product2: 'assets/images/products/product%20(2).jpeg',
    product3: 'assets/images/products/product%20(3).jpeg',
    product4: 'assets/images/products/product%20(4).jpeg',
    product5: 'assets/images/products/product%20(5).jpeg',
    product6: 'assets/images/products/product%20(6).jpeg',
    aboutImage: 'assets/images/products/product%20(7).jpeg'
};

// Set background images
Object.keys(productImages).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
        element.style.backgroundImage = `url('${productImages[key]}')`;
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe feature cards
document.querySelectorAll('.feature').forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-30px)';
    feature.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(feature);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

console.log('Zishann Luxury Lighting - Website Loaded Successfully! 🎉');
console.log('N8N Chat Widget Active ✅');
