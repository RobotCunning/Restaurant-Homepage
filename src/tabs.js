import createHomepage from "./restaurant";
import createMenu from "./menu";
import createContact from "./contact";

const createTabs = () => {
    var homepage = document.querySelector("#homepage");
    const homeTab = document.createElement('div');
    const menuTab = document.createElement('div');
    const contactTab = document.createElement('div');

    homeTab.id = 'homebtn';
    menuTab.id = 'menubtn';
    contactTab.id = 'contactbtn';
    homeTab.classList = 'tab';
    menuTab.classList = 'tab';
    contactTab.classList = 'tab';

    homeTab.textContent="Home";
    menuTab.textContent="Menu";
    contactTab.textContent="Contact Us";

    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

    homeTab.addEventListener('click', () => {
        createHomepage()
        createTabs()
    } )
    menuTab.addEventListener('click', () => {
        createMenu()
        createTabs()
    })
    contactTab.addEventListener('click', () => {
        createContact()
        createTabs()
    })
}

export default createTabs;