// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





// scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });


    // sticky navbar
    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // removing navlinks when clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

// scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



//typed js

const typed = new Typed('.multiple-text', {
    strings: ['Architects','3d Designers','Interior Designers','Landscape Developers','Valuers'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});



// contact us js 
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const contactMsg = document.getElementById('message');


function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "punitsofficemail@gmail.com",
        Password : "D92647D2981ED4D45E4BABA9321D915D8FEA",
        To : 'punitsofficemail@gmail.com',
        From : "punitsofficemail@gmail.com",
        Subject : subject.value,
        Body : `Someone is trying to contact us on Build Arch Website<br>
        Customer name: ${fullName.value} <br> 
        Customer email: ${email.value} <br> 
        Customer phone: ${phone.value} <br> 
        Customer message: ${contactMsg.value}`
    }).then(
      message => alert("you have successfully sent us a message")
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail()
})