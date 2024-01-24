import createTabs from "./tabs";


const createContact = () => {
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
    headline.textContent = 'Get in touch!';
    card.appendChild(headline);

    const contactCard = document.createElement('div');
    contactCard.className = 'contactCard';
    card.appendChild(contactCard)

    const contactForm = document.createElement('form');
    contactForm.className = 'contactForm';
    contactForm.setAttribute('onsubmit', 'return false');
    const name = document.createElement('input');
    name.placeholder= 'Enter your name...'
    contactForm.appendChild(name);
    const email = document.createElement('input');
    email.placeholder= 'Enter your email...'
    contactForm.appendChild(email);
    const number = document.createElement('input');
    number.placeholder= 'Enter your mobile...'
    contactForm.appendChild(number);
    const message = document.createElement('textarea');
    message.placeholder= 'Enter your message...'
    message.className = 'messageBox';
    contactForm.appendChild(message);
    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit');
    submit.placeholder = "We'll get back to you!"
    submit.className = 'submitBtn'
    submit.onclick= function(){
        alert("Thank you for your message, we will be in touch!");
        createContact()
        createTabs()
    }
    contactForm.appendChild(submit);

    contactCard.appendChild(contactForm);

    const footer = document.createElement('div')
    footer.className = 'footer'
    footer.innerHTML = 'Created by <a href="https://github.com/RobotCunning">Charlie Dauber</a>'
    homepage.appendChild(footer)

}

export default createContact;