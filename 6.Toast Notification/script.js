document.addEventListener('DOMContentLoaded', function () {
    const showToastBtn = document.getElementById('show-toast-btn');
    const toastContainer = document.getElementById('toast-container');

    showToastBtn.addEventListener('click', function () {
        showToast('This is a toast notification!');
    });

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;

        toastContainer.appendChild(toast);

        // Show the toast
        toastContainer.style.display = 'block';

        // Hide the toast after 3 seconds (adjust the timeout as needed)
        setTimeout(function () {
            toastContainer.style.display = 'none';
            toast.remove();
        }, 3000);
    }
});
