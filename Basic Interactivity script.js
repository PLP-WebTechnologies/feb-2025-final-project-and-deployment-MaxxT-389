document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            console.log('Form submitted (virtually)!');
            formMessage.classList.remove('hidden');
            setTimeout(() => {
                formMessage.classList.add('hidden');
                contactForm.reset();
            }, 3000);
        });
    }
});
