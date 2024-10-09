document.addEventListener("DOMContentLoaded", function () {
    const imageSections = document.querySelectorAll('.image-section');
    
    imageSections.forEach(section => {
        const images = section.querySelectorAll('img');
        let currentIndex = 0;

        // Hide all images except the first one
        images.forEach((img, index) => {
            img.style.display = index === 0 ? 'block' : 'none';
        });

        // Left button functionality
        section.querySelector('.nav.left').addEventListener('click', function () {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Wrap around to the last image
            updateImageDisplay(images, currentIndex);
        });

        // Right button functionality
        section.querySelector('.nav.right').addEventListener('click', function () {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Wrap around to the first image
            updateImageDisplay(images, currentIndex);
        });
    });
});

// Function to update the displayed image
function updateImageDisplay(images, currentIndex) {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none'; // Show the current image and hide others
    });
}
