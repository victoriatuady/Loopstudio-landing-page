const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header-nav");

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
