document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    //  phone number validation 
    const phoneNumberPattern = /^\d{10}$/;
    
    if (!phoneNumberPattern.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    
    // If all validations pass, you can submit the form to your backend or take further action.
    alert('Signup successful!');
});