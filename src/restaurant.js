function createHomepage() {
    var content = document.querySelector("#content");
    content.innerHTML = "";
    
    var homepage = document.createElement('div');
    homepage.id ='homepage';
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
    headline.textContent = 'Welcome to Blossom Cafe';
    card.appendChild(headline);

    const about = document.createElement('div');
    about.className = "about"
    about.textContent = "Come try our speciality coffee supplied directly from independent coffee farmers and enjoy pastries baked by a local bakery etcetcetc..."
    card.appendChild(about);

    const footer = document.createElement('div')
    footer.className = 'footer'
    footer.innerHTML = 'Created by <a href="https://github.com/RobotCunning">Charlie Dauber</a>'
    homepage.appendChild(footer)
}

export default createHomepage;