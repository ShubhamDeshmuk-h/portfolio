// This file contains utility functions that can be reused throughout the project.

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const showMessage = (message, type) => {
    const msgContainer = document.createElement('div');
    msgContainer.className = `message ${type}`;
    msgContainer.textContent = message;
    document.body.appendChild(msgContainer);
    setTimeout(() => {
        msgContainer.remove();
    }, 3000);
};

export const clearForm = (form) => {
    form.reset();
};

export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};