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
