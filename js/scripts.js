// WATCH SLIDER
document.addEventListener("DOMContentLoaded", function() {
const slider = document.querySelector('.slider');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
    currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 10000);
});

// TESTIMONIALS SLIDER
document.addEventListener("DOMContentLoaded", function() {
const slider = document.querySelector('.testimonies');
const slideContainer = document.querySelector('.testimonies_container');
const slides = document.querySelectorAll('.slider1');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
    currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 10000);
});

    