document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('input-text');
    const generateBtn = document.getElementById('generate-btn');
    const qrCodeDiv = document.getElementById('qr-code');

    generateBtn.addEventListener('click', function () {
        const inputValue = inputText.value.trim();

        if (inputValue !== '') {
            // Include the qrcode.min.js library
            const qr = new QRCode(qrCodeDiv, {
                text: inputValue,
                width: 128,
                height: 128,
            });
        } else {
            alert('Please enter text or URL');
        }
    });
});
