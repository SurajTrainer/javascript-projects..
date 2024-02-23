document.addEventListener("DOMContentLoaded", function () {
    // Array of background images
    const backgroundImages = [
        "img/img1.jpg",
        "img/img2.jpg",
        "img/img3.jpg"
        // Add more image URLs as needed
    ];

    let currentIndex = 0;

    // Function to change the background image
    function changeBackground() {
        document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % backgroundImages.length;
    }

    // Attach click event to the button
    document.getElementById("changeBackground").addEventListener("click", changeBackground);
});
