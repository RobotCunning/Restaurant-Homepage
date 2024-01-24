import createTabs from './tabs';

function createMenu() {
    var content = document.querySelector("#content");
    content.innerHTML = "";

    var homepage = document.createElement('div');
    homepage.className ="homepage";
    content.appendChild(homepage); 

    var header = document.createElement('div');
    header.id = 'header';
    header.className = 'header';
    homepage.appendChild(header);

    var container = document.createElement('div');
    container.className = ('container');
    homepage.appendChild(container);
    
    var card = document.createElement('div');
    card.className = "card";
    container.appendChild(card);

    const headline = document.createElement('h1');
    headline.className = "headline";
    headline.textContent = 'Menu';
    card.appendChild(headline);

    const menuCard = document.createElement('div');
    menuCard.className = 'menuCard';
    card.appendChild(menuCard)

    const menu = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "Espresso - £2.50"
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Americano - £3.20"
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Latte - £3.50"
    const menuItem4 = document.createElement('li');
    menuItem4.textContent = "Cappuccino - £3.50"
    const menuItem5 = document.createElement('li');
    menuItem5.textContent = "Tea - £2.70"
    const menuItem6 = document.createElement('li');
    menuItem6.textContent = "Pan au Chocolat - £2.30"
    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    menu.appendChild(menuItem3);
    menu.appendChild(menuItem4);
    menu.appendChild(menuItem5);
    menu.appendChild(menuItem6);
    menuCard.appendChild(menu);

    const footer = document.createElement('div')
    footer.className = 'footer'
    footer.innerHTML = 'Created by <a href="https://github.com/RobotCunning">Charlie Dauber</a>'
    homepage.appendChild(footer)
}
export default createMenu