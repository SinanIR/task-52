import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const article ="<article class=\"message\"></article><article class=\"message\"></article><article class=\"message\"></article><article class=\"message\"></article><article class=\"message\"></article>";
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
 var p = document.getElementsByClassName("message");
 var text = document.createTextNode("New message");
 paragraph.appendChild(text);
});