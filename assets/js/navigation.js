var x = document.querySelector(".hamburger-items");
x.addEventListener(onclick, toggleHamburger());

function toggleHamburger() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
