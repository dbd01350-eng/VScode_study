document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.action-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const actionName = e.target.textContent.trim();
            console.log(`Action clicked: ${actionName}`);
            
            // Example of data passing via localStorage as per prompt guidelines
            localStorage.setItem('lastAction', actionName);
            
            // Simple visual feedback
            alert(`You selected: ${actionName}`);
        });
    });
});
