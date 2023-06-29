export default function contactLoad() {
    let contentDiv = document.querySelector('#content');

    let mainContactContainer = document.createElement('div');
    mainContactContainer.setAttribute('id', 'content-container');
    contentDiv.appendChild(mainContactContainer);

    let contactHeader = document.createElement('div');
    contactHeader.setAttribute('class', 'header');
    contactHeader.innerHTML= 'Contact Us';
    mainContactContainer.appendChild(contactHeader);

    let innerContactContainer = document.createElement('div');
    innerContactContainer.setAttribute('id', 'inner-contact-container');
    mainContactContainer.appendChild(innerContactContainer);

    let phoneContainer = document.createElement('div');
    phoneContainer.setAttribute('class', 'contact-container');
    innerContactContainer.appendChild(phoneContainer);

    let phoneIcon = document.createElement('div');
    phoneIcon.setAttribute('class', 'material-symbols-outlined');
    phoneIcon.innerHTML = '<span class="material-symbols-outlined">call</span>';
    phoneContainer.appendChild(phoneIcon);

    let phoneNumber = document.createElement('div');
    phoneNumber.setAttribute('class', 'contact');
    phoneNumber.innerHTML = '(719) 123-4567';
    phoneContainer.appendChild(phoneNumber);

    let emailContainer = document.createElement('div');
    emailContainer.setAttribute('class', 'contact-container');
    innerContactContainer.appendChild(emailContainer);

    let emailIcon = document.createElement('div');
    emailIcon.setAttribute('class', 'material-symbols-outlined');
    emailIcon.innerHTML = '<span class="material-symbols-outlined">mail</span>';
    emailContainer.appendChild(emailIcon);

    let emailAddress = document.createElement('div');
    emailAddress.setAttribute('class', 'contact');
    emailAddress.innerHTML = 'contact@aspenalleycafe.com';
    emailContainer.appendChild(emailAddress)

    let locationContainer = document.createElement('div');
    locationContainer.setAttribute('class', 'contact-container');
    innerContactContainer.appendChild(locationContainer);

    let locationIcon = document.createElement('div');
    locationIcon.setAttribute('class', 'material-symbols-outlined');
    locationIcon.innerHTML= '<span class="material-symbols-outlined">pin_drop</span>';
    locationContainer.appendChild(locationIcon);

    let locationAddress = document.createElement('div');
    locationAddress.setAttribute('class', 'contact');
    locationAddress.innerHTML = '1234 Aspen Alley, Buena Vista, CO 81211';
    locationContainer.appendChild(locationAddress);

    let hoursContainer = document.createElement('div');
    hoursContainer.setAttribute('class', 'contact-container');
    innerContactContainer.appendChild(hoursContainer);

    let hoursIcon = document.createElement('div');
    hoursIcon.setAttribute('class', 'material-symbols-outlined');
    hoursIcon.innerHTML= '<span class="material-symbols-outlined">schedule</span>';
    hoursContainer.appendChild(hoursIcon);

    let hours = document.createElement('div');
    hours.setAttribute('class', 'contact');
    hours.innerHTML = 'Open Daily 7am-7pm';
    hoursContainer.appendChild(hours);

    let map = document.createElement('img');
    map.setAttribute('id', 'map');
    map.src = './map.png';
    mainContactContainer.appendChild(map);
}