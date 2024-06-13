// toggle icon bar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// SCROLL SECTION

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //   Sticky NavBar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// Scroll Reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img,.services-container,.portfolio-box,.contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p,.about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Web Designer"],
  typespeed: 70,
  backspeed: 70,
  backdelay: 6000,
  loop: true,
});

let mode=document.getElementById("moon");

mode.onclick=function(){
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    mode.src="./assets/sun.png";
  }
  else{
    mode.src="./assets/moon.png";
  }
}
