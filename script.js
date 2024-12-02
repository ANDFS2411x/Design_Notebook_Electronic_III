// Improved Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-track');
    const images = carousel.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const totalImages = images.length;

    // Function to update carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Update button visibility
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === totalImages - 1 ? 'none' : 'block';
    }

    // Next image
    function nextImage() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    // Previous image
    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    // Add event listeners to navigation buttons
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Optional: Swipe support for touch devices
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX - touchEndX;

        if (Math.abs(diffX) > 50) {  // Minimum swipe distance
            if (diffX > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    });

    // Initial setup
    updateCarousel();
});
