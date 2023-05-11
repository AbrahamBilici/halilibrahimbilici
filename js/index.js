const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});



// Submit form using AJAX
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Perform AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Success callback function
                showSuccessMessage();
            } else {
                // Error callback function
                showErrorMessage();
            }
        }
    };

    // Show success message function
    function showSuccessMessage() {
        // Display the success message on the page
        var successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
    }

    // Show error message function
    function showErrorMessage() {
        // Display the error message on the page
        var errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
    // Prepare and send the request
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });
    xhr.send(JSON.stringify(data));
});