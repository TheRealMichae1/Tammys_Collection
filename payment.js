document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
    const paymentResult = document.getElementById("payment-result");

    paymentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Frontend validation
        const cardNumber = document.getElementById("card-number").value;
        const expDate = document.getElementById("exp-date").value;
        const cvv = document.getElementById("cvv").value;
        const amount = document.getElementById("amount").value;

        if (!isValidCardNumber(cardNumber) || !isValidExpDate(expDate) || !isValidCVV(cvv) || !isValidAmount(amount)) {
            paymentResult.textContent = "Please check your payment details.";
            return;
        }

        // Simulate payment processing (replace with actual payment processing logic)
        setTimeout(function () {
            paymentResult.textContent = "Payment successful!";
            paymentForm.reset();
        }, 2000);
    });

    // Validation functions (you can improve these based on your requirements)
    function isValidCardNumber(cardNumber) {
        // Check if card number is valid (e.g., using regex)
        return /^\d{16}$/.test(cardNumber);
    }

    function isValidExpDate(expDate) {
        // Check if expiration date is valid (e.g., using regex)
        return /^\d{2}\/\d{2}$/.test(expDate);
    }

    function isValidCVV(cvv) {
        // Check if CVV is valid (e.g., using regex)
        return /^\d{3}$/.test(cvv);
    }

    function isValidAmount(amount) {
        // Check if amount is valid (e.g., using regex)
        return /^\$\d+\.\d{2}$/.test(amount);
    }
});
