const galleryContainer = document.getElementById('gallery-container');
const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Sample image URLs
const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
];

// Populate the gallery with images
imageUrls.forEach((imageUrl) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'gallery-item';
    gallery.appendChild(img);
});

let scrollPosition = 0;

// Handle next button click
nextButton.addEventListener('click', () => {
    scrollPosition += 100; // Adjust as needed
    gallery.style.transform = `translateX(-${scrollPosition}%)`;
});

// Handle previous button click
prevButton.addEventListener('click', () => {
    scrollPosition -= 100; // Adjust as needed
    gallery.style.transform = `translateX(-${scrollPosition}%)`;
});