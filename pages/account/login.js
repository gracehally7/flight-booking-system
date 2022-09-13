// Get the form element
const form = document.querySelector("#login-form"),
  signInBtn = form.querySelector("#login-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
signInBtn.addEventListener("click", () => {
  console.log("Clicked Me");
});
