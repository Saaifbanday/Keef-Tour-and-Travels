// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("ed1PnVmyc3iqbMUXn");  // Replaced with your EmailJS Public Key
})();

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send the form data using EmailJS
    emailjs.sendForm('service_Mohsin', 'template_13Mohsin', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('bookingForm').reset();  // Reset the form after submission
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('errorMessage').style.display = 'block';
        });
});