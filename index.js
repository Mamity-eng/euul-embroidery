const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => observer.observe(section));

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.setAttribute('style', 'position:sticky; top:0; background-color: #080909; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);');
  } else {
    header.removeAttribute('style', "position:fixed; background: transparent; box-shadow: none;");
  }
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mainNav = document.getElementById("mainNav");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  hamburgerBtn.classList.toggle("open");
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
});

// Close the menu automatically when a nav link is clicked (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  });
});


const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value;
    const details = document.getElementById("contactMessage2").value;
    const phone = "2348064730355"; // shop's WhatsApp number

    const message = `Hello, my name is ${name}. ${details}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    contactForm.reset();
  });
}