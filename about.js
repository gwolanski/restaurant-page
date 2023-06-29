export default function pageLoad() {
    let contentDiv = document.querySelector('#content');

    let aboutContainer = document.createElement('div');
    aboutContainer.setAttribute('id', 'content-container');
    contentDiv.appendChild(aboutContainer);

    let aspenImage = document.createElement('img');
    aspenImage.setAttribute('id', 'aspen-image');
    aspenImage.src = './aspens.jpg';
    aboutContainer.appendChild(aspenImage);

    let welcomeText = document.createElement('div');
    welcomeText.setAttribute('class', 'restaurant-info');
    welcomeText.innerHTML = '--- WELCOME ---';
    aboutContainer.appendChild(welcomeText);

    let aboutRestaurant = document.createElement('div');
    aboutRestaurant.setAttribute('class', 'restaurant-info');
    aboutRestaurant.innerHTML = 'We have been fueling mountain adventures with hearty meals since 2015 and look forward to serving you. Come find us in Buena Vista, CO!';
    aboutContainer.appendChild(aboutRestaurant);

    let hours = document.createElement('div');
    hours.setAttribute('class', 'restaurant-info');
    hours.setAttribute('id', 'hours');
    hours.innerHTML = 'Open daily 7am-7pm';
    aboutContainer.appendChild(hours);
}