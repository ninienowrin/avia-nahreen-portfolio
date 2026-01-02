// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Gallery Lightbox (Simple Implementation)
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-image');
            if (img) {
                // Simple lightbox - opens image in new tab for now
                // Can be enhanced with a modal later
                window.open(img.src, '_blank');
            }
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Tab Switching for Writings Section
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
});

// Example function to add writings (can be expanded to fetch from APIs)
function addWritingItem(containerId, title, authors, journal, year, description, link) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const writingItem = document.createElement('div');
    writingItem.className = 'writing-item';
    writingItem.innerHTML = `
        <h3>${title}</h3>
        <div class="meta">${authors} | ${journal} | ${year}</div>
        ${description ? `<div class="description">${description}</div>` : ''}
        ${link ? `<a href="${link}" target="_blank" rel="noopener noreferrer" class="link">Read More →</a>` : ''}
    `;
    
    container.appendChild(writingItem);
}

// You can use this function to add writings dynamically
// Example:
// addWritingItem('academic-list', 
//     'Title of Paper', 
//     'Author Names', 
//     'Journal Name', 
//     '2024', 
//     'Description of the paper...', 
//     'https://example.com/paper'
// );

// Optional: Fetch YouTube videos (requires YouTube API key)
// This is a placeholder - you'll need to set up YouTube Data API v3
async function fetchYouTubeVideos() {
    // This would require YouTube Data API setup
    // For now, the iframe embed should work directly
    console.log('YouTube videos can be embedded directly or fetched via API');
}

