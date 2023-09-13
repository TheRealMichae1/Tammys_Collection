// Sample product data (you can replace this with real data from a backend)
const products = [
    {
        id: 1,
        name: "hp laptop",
        price: 500,
        description: "core i7 laptop. 3.55GHZ processor. new release",
        imageUrl: "product1.jpeg",
    },
    {
        id: 2,
        name: "Iphone 14pro max",
        price: 1000,
        description: "1TB storage, 32GB RAM, 48 + 12 + 12 back camera, 12mp front camera. 4Hk video",
        imageUrl: "product2.png",
    },
    {
        id: 3,
        name: "product 3",
        price: 39.99,
        description: "description of the product 3",
        imageUrl: "product3.jpeg",
    },
    {
        id: 4,
        name: "product 4",
        price: 10.5,
        description: "description of the product 4",
        imageUrl: "product4.jpeg",
    },
    {
        id: 5,
        name: "product 5",
        price: 15,
        description: "description of the product 5",
        imageUrl: "product5.webp",
    },
    {
        id: 6,
        name: "product 6",
        price: 14.7,
        description: "description of the product 6",
        imageUrl: "product6.jpg",
    },
];

// Function to display products on the page
function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    const exchangeRate = 22.5; // Replace with the current exchange rate

    products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        const productImage = document.createElement("img");
        productImage.classList.add("product-image");
        productImage.src = product.imageUrl;

        const productName = document.createElement("div");
        productName.classList.add("product-name");
        productName.textContent = product.name;

        // Convert the product price to Zambian Kwacha (ZMW)
        const productPrice = document.createElement("div");
        productPrice.classList.add("product-price");
        const priceInZMW = (product.price * exchangeRate).toFixed(2);
        productPrice.textContent = `ZMW ${priceInZMW}`;

        const productDescription = document.createElement("div");
        productDescription.classList.add("product-description");
        productDescription.textContent = product.description;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productDescription);

        productContainer.appendChild(productItem);
    });
}

// Call the function to display products when the page loads
window.addEventListener("load", displayProducts);
