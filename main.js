const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navMenu = document.querySelectorAll(".nav li");

//Add an event to burger button
burgerBtn.addEventListener("click", () => {
  nav.style.display = "block";
  closeBtn.style.display = "block";
  burgerBtn.style.display = "none";
  header.style.backgroundColor = "#000";
});

//Add an event to close button
closeBtn.addEventListener("click", () => {
  burgerBtn.style.display = "block";
  nav.style.display = "none";
  closeBtn.style.display = "none";
  header.style.backgroundColor = "transparent";
});

// Media queries for mobile and desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 1023) {
    header.style.backgroundColor = "transparent";
    closeBtn.style.display = "none";
    nav.style.display = "block";
    burgerBtn.style.display = "none";

    navMenu.forEach((link) => {
      link.addEventListener("click", () => {
        closeBtn.style.display = "none";
        nav.style.display = "block";
        header.style.backgroundColor = "transparent";
        burgerBtn.style.display = "none";
      });
    });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 1023) {
    burgerBtn.style.display = "block";
    nav.style.display = "none";

    navMenu.forEach((link) => {
      link.addEventListener("click", () => {
        closeBtn.style.display = "none";
        nav.style.display = "none";
        header.style.backgroundColor = "transparent";
        burgerBtn.style.display = "block";
      });
    });
  }
});
