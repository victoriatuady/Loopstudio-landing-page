const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header-nav");
const lists = document.querySelectorAll("li a");

//Add an event to burger button
burgerBtn.addEventListener("click", () => {
  nav.classList.add("show");
  burgerBtn.classList.toggle("hide");
  closeBtn.classList.add("show");
  header.classList.add("bg");
});

//Add an event to close button
closeBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("show");
  nav.classList.remove("show");
  burgerBtn.classList.remove("hide");
  header.classList.remove("bg");
});

// Remove nav when link is clicked
lists.forEach((list) => {
  list.addEventListener("click", () => {
    nav.classList.remove("show");
    header.classList.remove("bg");
    closeBtn.classList.remove("show");
    burgerBtn.classList.remove("hide");
  });
});
