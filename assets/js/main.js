const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 1500,
  distance: "60px",
  delay: 200,
  reset: true,
  easing: "cubic-bezier(0.25, 0.8, 0.25, 1)"
});

// Hero Section
sr.reveal(".hero__title", { origin: "top" });
sr.reveal(".hero__description", { origin: "bottom", delay: 400 });
sr.reveal(".hero__info-wrapper", { origin: "bottom", interval: 150, delay: 600 });

// Headers de secciones
sr.reveal(".section__header", { origin: "top", distance: "30px" });

// About y Skills
sr.reveal(".about__content", { origin: "left", delay: 300 });
sr.reveal(".highlight__item", { origin: "left", interval: 150, delay: 400 });
sr.reveal(".skills__content", { origin: "right", interval: 100, delay: 300 });

// Educación, Experiencia, Proyectos, Contacto y Footer
sr.reveal(".qualification__item, .service__card, .project__content", {
  origin: "bottom",
  interval: 150,
  delay: 300
});

sr.reveal(".contact__title", { origin: "top" });
sr.reveal(".contact__description", { origin: "bottom", delay: 300 });
sr.reveal(".contact__actions .btn", { origin: "bottom", interval: 150, delay: 500 });

sr.reveal(".footer__content", { origin: "bottom", interval: 100 });
