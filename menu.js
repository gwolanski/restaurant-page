export default function menuLoad() {
    let contentDiv = document.querySelector('#content');

    let menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'content-container');
    menuContainer.setAttribute('class', 'menu-container');
    contentDiv.appendChild(menuContainer);

    let breakfastContainer = document.createElement('div');
    breakfastContainer.setAttribute('class', 'meal-category');
    breakfastContainer.innerHTML = 'Breakfast';
    menuContainer.appendChild(breakfastContainer);

    let breakfastInnerContainer = document.createElement('div');
    breakfastInnerContainer.setAttribute('class', 'menu-item-container');
    breakfastContainer.appendChild(breakfastInnerContainer);

    let lunchDinnerContainer = document.createElement('div');
    lunchDinnerContainer.setAttribute('class', 'meal-category');
    lunchDinnerContainer.innerHTML = "Lunch & Dinner";
    menuContainer.appendChild(lunchDinnerContainer);

    let lunchDinnerInnerContainer = document.createElement('div');
    lunchDinnerInnerContainer.setAttribute('class', 'menu-item-container');
    lunchDinnerContainer.appendChild(lunchDinnerInnerContainer);
    
    class MenuItem {
        constructor(name, price, description) {
            this.name = name;
            this.description = description;
            this.price = price;
        }

        itemInfo() {
            return `${this.name} - ${this.price}: ${this.description}`;
        }
    }

    let menuItem1 = new MenuItem("Big Bear Breakfast Sandwich", "$9.99", "Egg, avocado, pepperjack cheese, tomato, and lettuce on your choice of bagel.");
    let menuItem2 = new MenuItem("Breakfast Burrito", "$9.99", "Crispy breakfast potatoes, eggs, your choice of protein (bacon, sausage, avocado), pepperjack cheese, and green chili sauce wrapped in a jalapeno cheddar tortilla.")
    let menuItem3 = new MenuItem("Hearty Breakfast Bowl", "$10.50", "Crispy breakfast potatoes, eggs, your choice of protein (bacon, sausage, avocado), and shredded cheese. Drizzled with hot sauce.")
    let menuItem4 = new MenuItem("Smoothie Bowl", "$8.99", "Strawberries, banana, and yogurt smoothie bowl topped with granola, nuts, and chopped fruit.");
    let menuItem5 = new MenuItem("Italian Sub", "$12.50", "Freshly baked baguette stuffed with salami, capicolla, prosciutto, provolone cheese, banana peppers, lettuce, tomato, onion, and creamy Italian dressing. Served with chips.");
    let menuItem6 = new MenuItem("Veggie Lover Sub", "$9.25", "Freshly baked baguette stuffed with fajita veggies, portobella mushrooms, and arugula drizzled with our vegan cilantro crema. Add cheese (+$2). Served with chips.");
    let menuItem7 = new MenuItem("Classic Cheeseburger", "$9.00", "Beef, chicken, or black bean patty topped with cheddar cheese, pickles, lettuce, tomato, and onion. Served with fries.");
    let menuItem8 = new MenuItem("Jalapeno Popper Burger", "$13.50", "Beef, chicken, or black bean patty topped with bacon, jalapenos, fried onions, and cream cheese on a sesame bun. Served with fries.");
    let menuItem9 = new MenuItem("Classic Pizza", "$14.00", "Large pizza topped with marinara and a four-cheese blend. Add pepperoni (+$2).");
    let menuItem10 = new MenuItem("Jalapeno Popper Pizza", "$18.00", "Our Classic Pizza topped with bacon, jalapenos, and cream cheese.")

    function createMenuItemElement(menuItem) {
        let menuItemElement = document.createElement('div');
        menuItemElement.classList.add("menu-item");

        let nameElement = document.createElement('div');
        nameElement.classList.add('item-name');
        nameElement.innerHTML = menuItem.name;

        let priceElement = document.createElement('div');
        priceElement.classList.add('item-price');
        priceElement.innerHTML = menuItem.price;

        let descriptionElement = document.createElement('div');
        descriptionElement.classList.add('item-description');
        descriptionElement.innerHTML = menuItem.description;

        menuItemElement.appendChild(nameElement);
        menuItemElement.appendChild(priceElement);
        menuItemElement.appendChild(descriptionElement);

        return menuItemElement;
    }

    const breakfastItems = [
        createMenuItemElement(menuItem1),
        createMenuItemElement(menuItem2),
        createMenuItemElement(menuItem3),
        createMenuItemElement(menuItem4),
    ];

    const lunchDinnerItems = [
        createMenuItemElement(menuItem5),
        createMenuItemElement(menuItem6),
        createMenuItemElement(menuItem7),
        createMenuItemElement(menuItem8),
        createMenuItemElement(menuItem9),
        createMenuItemElement(menuItem10),
    ];

    breakfastItems.forEach(element => {
        breakfastInnerContainer.appendChild(element);
    });

    lunchDinnerItems.forEach(element => {
        lunchDinnerInnerContainer.appendChild(element);
    })

}