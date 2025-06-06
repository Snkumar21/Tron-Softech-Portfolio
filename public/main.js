function openModal() {
    alert("Project details will be available soon. Stay tuned!");
}

// ContactForm Listener
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('cemail').value;
        const phone = document.getElementById('uphone').value;
        const message = document.getElementById('message').value;

        // Make a POST request to your server for form submission
        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert('Message Submitted Successfully!');
                form.reset(); // Reset the form after successful submission
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch((error) => console.error('Error:', error));
    });
});