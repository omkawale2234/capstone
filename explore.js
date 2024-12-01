// DOM elements
const searchBar = document.getElementById('searchBar');
const genreSelect = document.getElementById('genreSelect');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const backToHomeBtn = document.querySelector('.back-to-home');
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Pagination functionality
let currentPage = 1;
const itemsPerPage = 5; // Number of manga items per page

// Function to handle search
searchBar.addEventListener('input', function() {
    const searchTerm = searchBar.value.toLowerCase();
    filterManga(searchTerm, genreSelect.value);
});

// Function to handle genre filter
genreSelect.addEventListener('change', function() {
    const genre = genreSelect.value;
    const searchTerm = searchBar.value.toLowerCase();
    filterManga(searchTerm, genre);
});

// Function to filter manga based on search and genre
function filterManga(searchTerm, genre) {
    const mangaCards = document.querySelectorAll('.manga-card');
    mangaCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const genreText = card.querySelector('p').textContent.toLowerCase();
        const isMatch = title.includes(searchTerm) && (genre ? genreText.includes(genre) : true);
        card.style.display = isMatch ? 'block' : 'none';
    });
}

// Pagination functions
function updatePagination() {
    const mangaCards = document.querySelectorAll('.manga-card');
    const totalItems = mangaCards.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Hide all cards
    mangaCards.forEach(card => card.style.display = 'none');

    // Show items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    for (let i = startIndex; i < endIndex; i++) {
        if (mangaCards[i]) mangaCards[i].style.display = 'block';
    }

    // Disable buttons if at the first or last page
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

nextBtn.addEventListener('click', function() {
    const mangaCards = document.querySelectorAll('.manga-card');
    const totalPages = Math.ceil(mangaCards.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

// Handle "Back to Home" button
backToHomeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html'; // Adjust path if needed
});

// Profile dropdown functionality
menuButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
});

// Close the dropdown menu when clicking outside
window.addEventListener('click', function(event) {
    if (!menuButton.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Handle page load - initially apply pagination
document.addEventListener('DOMContentLoaded', function() {
    updatePagination();
});



