// Array to store product data
let products = [];

// Function to add a new product
function addProduct(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const tags = document.getElementById("tags").value.split(",").map(tag => tag.trim());
    const image = document.getElementById("image").files[0];

    // Create a new product object
    const product = {
        name: name,
        price: price,
        tags: tags,
        image: URL.createObjectURL(image)
    };

    // Add the new product to the products array
    products.push(product);

    // Display the new product
    displayProducts();

    // Reset the form
    document.getElementById("product-form").reset();
}

// Function to display products
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear existing content

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Product image
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        productDiv.appendChild(img);

        // Product name
        const name = document.createElement("h3");
        name.textContent = product.name;
        productDiv.appendChild(name);

        // Product price
        const price = document.createElement("p");
        price.textContent = "Price: $" + product.price;
        productDiv.appendChild(price);

        // Product tags
        const tags = document.createElement("p");
        tags.textContent = "Tags: " + product.tags.join(", ");
        productDiv.appendChild(tags);

        // Add remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            products.splice(index, 1);
            displayProducts();
        });
        productDiv.appendChild(removeButton);

        productList.appendChild(productDiv);
    });
}

// Add event listener to the form
document.getElementById("product-form").addEventListener("submit", addProduct);
