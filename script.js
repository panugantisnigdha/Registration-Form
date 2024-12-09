$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        
        if (name === '' || email === '' || phone === '') {
            alert('Please fill all the fields.');
            e.preventDefault();
        } else {
            alert('Form submitted successfully!');
        }
    });
});
