let slideIndex = 1;

// Next/previous controls
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and highlight corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
});
