document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active class for styling
            question.classList.toggle('active');

            // Find the answer element
            const answer = question.nextElementSibling;
            
            // Toggle visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});