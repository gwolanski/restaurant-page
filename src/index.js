import pageLoad from "../dist/about";
import menuLoad from "../dist/menu";
import contactLoad from "../dist/contact";

function headerLoad() {
    let contentDiv = document.querySelector('#content');

    let restaurantName = document.createElement('div');
    restaurantName.innerHTML = 'Aspen Alley Cafe';
    restaurantName.setAttribute('id', 'main-header');
    contentDiv.appendChild(restaurantName);

    let navigationContainer = document.createElement('div');
    navigationContainer.setAttribute('id', 'nav-container');
    contentDiv.appendChild(navigationContainer);

    let aboutBtn = document.createElement('button');
    aboutBtn.classList.add('nav-btn');
    aboutBtn.setAttribute('id', 'aboutBtn');
    aboutBtn.innerHTML = 'About';
    navigationContainer.appendChild(aboutBtn);

    let menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.setAttribute('id', "menuBtn");
    menuBtn.innerHTML = 'Menu';
    navigationContainer.appendChild(menuBtn);

    let contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.setAttribute('id', 'contactBtn');
    contactBtn.innerHTML = 'Contact';
    navigationContainer.appendChild(contactBtn);
}

function websiteStartup() {
    headerLoad();
    pageLoad();
}

websiteStartup();

function clearPage() {
    const aboutContent = document.getElementById('content-container');
    aboutContent.remove();
}

let aboutButton = document.querySelector('#aboutBtn');
aboutButton.addEventListener('click', () => {
    clearPage();
    pageLoad();
})


let menuButton = document.querySelector('#menuBtn');
menuButton.addEventListener('click', () => {
    clearPage();
    menuLoad();
})

let contactButton = document.querySelector('#contactBtn');
contactButton.addEventListener('click', () => {
    clearPage();
    contactLoad();
})