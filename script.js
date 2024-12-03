// Load script content when page loads
document.addEventListener('DOMContentLoaded', function() {
    const scriptName = document.location.pathname.split('/').pop().replace('.html', '');
    document.getElementById('script-title').textContent = scriptName.toUpperCase();
}); // Added closing brace

// Copy code function
function copyCode() {
    try {
        const codeContent = document.getElementById('code-content');
        const button = document.querySelector('.copy-button');
        
        // Create a temporary textarea to copy the text
        const textarea = document.createElement('textarea');
        textarea.value = codeContent.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        // Visual feedback
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.textContent = 'Copy Code';
            button.classList.remove('copied');
        }, 2000);
    } catch (error) {
        console.error('Failed to copy:', error);
        button.textContent = 'Failed to copy';
        button.classList.add('error');
    }
}

// Add this to script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    try {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        const formData = {
            name: form.querySelector('input[type="text"]').value,
            email: form.querySelector('input[type="email"]').value,
            message: form.querySelector('textarea').value
        };

        // Here you would typically send the data to your backend
        // For now, we'll just simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Clear the form
        form.reset();
        
        // Show success message
        alert('Message sent successfully!');

    } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
    } finally {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
}
