import { createNavBar, createFooter } from './nav.js';
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact.js';
import { createAboutPage } from './about.js';

// Function to navigate to the menu page
function goToMenu() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(createNavBar(goToHome, goToMenu, goToContact, goToAbout));
    contentDiv.appendChild(createMenuPage());
    contentDiv.appendChild(createFooter());
}
// Function to navigate to the home page
function goToHome() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(createNavBar(goToHome, goToMenu, goToContact, goToAbout));
    contentDiv.appendChild(createHomePage(goToMenu));
    contentDiv.appendChild(createFooter());
}

// Function to navigate to the about page
function goToAbout() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(createNavBar(goToHome, goToMenu, goToContact, goToAbout));
    contentDiv.appendChild(createAboutPage());
    contentDiv.appendChild(createFooter());
}

// Function to navigate to the contact page
function goToContact() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(createNavBar(goToHome, goToMenu, goToContact, goToAbout));
    contentDiv.appendChild(createContactPage());
    contentDiv.appendChild(createFooter());
}

// Function to initialize the website
export function initWebsite() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(createNavBar(goToHome, goToMenu, goToContact, goToAbout));
    contentDiv.appendChild(createHomePage());
    contentDiv.appendChild(createFooter());
};
