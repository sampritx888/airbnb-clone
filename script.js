document.addEventListener('DOMContentLoaded', () => {
    console.log('Airbnb Clone Script Loaded!');

    // Example: Basic interactivity for profile button
    const profileBtn = document.querySelector('.profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            alert('Profile menu would open here!');
            // In a real application, you'd toggle a dropdown menu here.
        });
    }

    // Example: Search bar functionality (conceptual)
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchBar.value.trim();
            if (searchTerm) {
                alert(`Searching for: "${searchTerm}"`);
                // In a real app, this would trigger a search API call or navigate to a search results page.
            } else {
                alert('Please enter a destination to search.');
            }
        });
    }

    // Example: Explore button click
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            // Smooth scroll to the destinations section
            document.querySelector('.destinations').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add more interactive elements as needed for a full clone
});
