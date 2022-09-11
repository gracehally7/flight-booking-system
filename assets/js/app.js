const toggleButton = document.querySelector(".togglebutton");
const navBar = document.querySelector(".navbarlinks");

toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
