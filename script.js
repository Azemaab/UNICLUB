// Add search functionality
const searchBar = document.querySelector('.search-bar');
const clubCards = document.querySelectorAll('.club-card');

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    clubCards.forEach(card => {
        const title = card.querySelector('.club-title').textContent.toLowerCase();
        const description = card.querySelector('.club-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}); 