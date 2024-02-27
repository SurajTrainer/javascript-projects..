document.addEventListener("DOMContentLoaded", () => {
    const coin_list = document.getElementById("coin-list");

    // Function to fetch cryptocurrency prices from CoinGecko API
    const fetchCryptoPrices = async () => {
        try {
            const response = await fetch("https://api.coingecko.com/api/v3/coins/markets", {
                method: "GET",
                params: {
                    vs_currency: "usd",  // You can change the currency if needed
                    ids: "bitcoin,ethereum,ripple",  // Add more cryptocurrencies separated by commas
                },
            });
            
            const data = await response.json();

            // Display cryptocurrency prices
            data.forEach(crypto => {
                const cryptoItem = document.createElement("div");
                cryptoItem.classList.add("crypto-item");
                cryptoItem.innerHTML = `
                    <img src="${crypto.image}" alt="${crypto.name}">
                    <span>${crypto.name}</span>
                    <span>$${crypto.current_price.toFixed(2)}</span>
                `;
                coin_list.appendChild(cryptoItem);
            });
        } catch (error) {
            console.error("Error fetching crypto prices:", error);
        }
    };

    // Fetch cryptocurrency prices on page load
    fetchCryptoPrices();
});
