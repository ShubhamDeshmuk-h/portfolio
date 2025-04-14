// JavaScript for Shubham Deshmukh's Portfolio

// Auto Year for Footer
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
});

// Menu Toggle Functionality
const sidemenu = document.getElementById('sidemenu');
document.getElementById('openmenu').addEventListener('click', () => {
    sidemenu.style.right = "0";
});
document.getElementById('closemenu').addEventListener('click', () => {
    sidemenu.style.right = "-200px";
});

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
const contactForm = document.querySelector('form[name="submit-to-google-sheet"]');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.Name.value;
    const email = contactForm.Email.value;
    const message = contactForm.Message.value;

    if (name && email && message) {
        // Handle form submission logic here
        alert('Form submitted successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Dynamic Content Loading (Example for Achievements)
const achievementsSection = document.getElementById('achievements');
fetch('path/to/achievements.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(achievement => {
            const achievementItem = document.createElement('div');
            achievementItem.classList.add('achievement-item');
            achievementItem.innerHTML = `<h3>${achievement.title}</h3><p>${achievement.description}</p>`;
            achievementsSection.appendChild(achievementItem);
        });
    })
    .catch(error => console.error('Error loading achievements:', error));