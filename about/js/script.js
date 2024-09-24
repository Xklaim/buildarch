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
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



// //typed js

// const typed = new Typed('.multiple-text', {
//     strings: ['Architects','3d Designers','Interior Designers','Landscape Developers','Valuers'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 500,
//     loop: true
// });



// contact us js 
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const contactMsg = document.getElementById('message');


function sendEmail() {

    if (fullName.value !== "" && email.value !== "" && phone.value !== "" && subject.value !== "" && contactMsg.value !== "") {

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
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
   }
   else {
    Swal.fire({
        icon: "error",
        title: "Message Could Not Be Sent",
        text: "Please enter details in all the fields",
        footer: '<a href="#">Why do we need your details?</a>'
      });
   }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail()

    // clearing the fields
    fullName.value = "";
    email.value = "";
    phone.value = "";
    subject.value = "";
    contactMsg.value = "";

})

const colorMode = document.getElementById("modeBtn");

// function changeTheme() {
//     document.documentElement.style.setProperty('--main-color', 'rgb(0, 150, 136)');    
//     document.documentElement.style.setProperty('--bg-color', '#f0f0f5');    
//     document.documentElement.style.setProperty('--second-bg-color', '#fff'); 
//     document.documentElement.style.setProperty('--text-color', '#1f1f1f');
//     colorMode.innerHTML = '<i class="bx bx-moon"></i>';
//   }
  

// let isDarkMode = true;

// function changeTheme() {
//   if (isDarkMode) {
//     document.documentElement.style.setProperty('--main-color', 'rgb(0, 150, 136)');    
//     document.documentElement.style.setProperty('--bg-color', '#f0f0f5');    
//     document.documentElement.style.setProperty('--second-bg-color', '#fff'); 
//     document.documentElement.style.setProperty('--text-color', '#1f1f1f');
//     colorMode.innerHTML = '<i class="bx bxs-moon"></i>';
//   } else {
//     document.documentElement.style.setProperty('--main-color', 'rgb(39, 255, 226)');    
//     document.documentElement.style.setProperty('--bg-color', '#1f242d');    
//     document.documentElement.style.setProperty('--second-bg-color', '#323946'); 
//     document.documentElement.style.setProperty('--text-color', '#fff');
//     colorMode.innerHTML = '<i class="bx bxs-sun"></i>';
//   }

//   isDarkMode = !isDarkMode; // Toggle the state
// }


let isDarkMode = true; // Default value

// Function to apply the current theme based on `isDarkMode`
function applyTheme(isDarkMode) {
  const colorMode = document.getElementById('modeBtn'); // Get button by id

  if (isDarkMode) {
    // Apply dark mode
    document.documentElement.style.setProperty('--main-color', 'rgb(39, 255, 226)');    
    document.documentElement.style.setProperty('--bg-color', '#1f242d');    
    document.documentElement.style.setProperty('--second-bg-color', '#323946'); 
    document.documentElement.style.setProperty('--text-color', '#fff');
    colorMode.innerHTML = '<i class="bx bxs-sun"></i>'; // Sun icon for dark mode
  } else {
    // Apply light mode
    document.documentElement.style.setProperty('--main-color', 'rgb(0, 150, 136)');    
    document.documentElement.style.setProperty('--bg-color', '#f0f0f5');    
    document.documentElement.style.setProperty('--second-bg-color', '#fff'); 
    document.documentElement.style.setProperty('--text-color', '#1f1f1f');
    colorMode.innerHTML = '<i class="bx bxs-moon"></i>'; // Moon icon for light mode
  }
}

// Function to toggle between light and dark modes
function changeTheme() {
  isDarkMode = !isDarkMode; // Toggle dark mode state
  applyTheme(isDarkMode); // Apply the updated theme

  // Store the current theme in localStorage
  localStorage.setItem('isDarkMode', isDarkMode ? 'true' : 'false');
}

// On page load, check localStorage for saved theme and apply it
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('isDarkMode');
  isDarkMode = savedTheme === 'true'; // Get saved theme from localStorage
  applyTheme(isDarkMode); // Apply the saved theme
});

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
      // Change the title when the tab is inactive
      document.title = 'Come back! 🥺';
  } else {
      // Restore the original title when the tab is active
      document.title = "Build Arch 🏙️";
  }
});

setInterval(() => {
  if (!document.hidden) {
      document.title = document.title === "Build Arch 🏙️" ? "Architects 👷" : "Build Arch 🏙️";
  }
}, 2000);
