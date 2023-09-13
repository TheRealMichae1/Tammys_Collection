document.addEventListener("DOMContentLoaded", function() {
    const addToCartButton = document.getElementById("add-to-cart");
    const quantityInput = document.getElementById("quantity");

    addToCartButton.addEventListener("click", function() {
        const quantity = parseInt(quantityInput.value);
        alert(`Added ${quantity} product(s) to the cart.`);
    });
});
