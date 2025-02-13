document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    const formErrorsElement = document.getElementById('form-errors');

    function validateContactForm(form) {
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        const errors = [];

        // Name validation
        if (name.length < 2) {
            errors.push('Name must be at least 2 characters long.');
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push('Please enter a valid email address.');
        }

        // Subject validation
        if (subject.length < 3) {
            errors.push('Subject must be at least 3 characters long.');
        }

        // Message validation
        if (message.length < 10) {
            errors.push('Message must be at least 10 characters long.');
        }

        return errors;
    }

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formErrorsElement.innerHTML = ''; // Clear previous errors

        const errors = validateContactForm(feedbackForm);

        if (errors.length === 0) {
            // In a real application, this would send the form data to a server
            const formData = {
                name: feedbackForm.name.value,
                email: feedbackForm.email.value,
                subject: feedbackForm.subject.value,
                message: feedbackForm.message.value
            };

            // Simulate form submission
            console.log('Form submitted:', formData);
            alert('Thank you for your feedback! We will get back to you soon.');
            
            // Reset the form
            feedbackForm.reset();
        } else {
            // Display errors
            formErrorsElement.innerHTML = errors.map(error => 
                `<p class="error">${error}</p>`
            ).join('');
        }
    });
});