export function createNavBar(goToHome, goToMenu, goToContact, goToAbout) {
    const navBar = document.createElement('nav');
    navBar.className = 'navbar navbar-expand-lg navbar-dark bg-dark';
    navBar.innerHTML = `
    <div class="container-fluid">
    <a class="navbar-brand mx-4" href="#" id="homeLink">Burger Delight</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
                  <a class="nav-link" href="#" id="menuLink">Menu</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#" id="aboutLink">About Us</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#" id="contactLink">Contact</a>
              </li>
        </ul>
      </div>
    </div>
    `;
 
    // Add event listeners to navigation links
    const homeLink = navBar.querySelector('#homeLink');
    homeLink.addEventListener('click', goToHome);

    const menuLink = navBar.querySelector('#menuLink');
    menuLink.addEventListener('click', goToMenu);
    
    const aboutLink = navBar.querySelector('#aboutLink');
    aboutLink.addEventListener('click', goToAbout);

    const contactLink = navBar.querySelector('#contactLink');
    contactLink.addEventListener('click', goToContact);


    return navBar;
}

export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-dark text-white text-center py-3';
    footer.innerHTML = `
        <p>&copy; 2023 Burger Delight. All rights reserved.</p>
    `;
    return footer;
}

