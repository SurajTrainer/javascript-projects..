document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "It always seems impossible until it's done. - Nelson Mandela",
        "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats"
    ];

    const quoteText = document.getElementById('quote-text');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    });
});
