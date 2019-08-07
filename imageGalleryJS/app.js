const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

// set opacity for first image
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  //reset opacity
  imgs.forEach(img => (img.style.opacity = 1));
  //change current img to source of clicked img
  current.src = e.target.src;
  // add amimation through fade-in class
  current.classList.add("fade-in");
  //remove fade-in class after 0.5s
  setTimeout(() => current.classList.remove("fade-in"), 500);
  // change opacity
  e.target.style.opacity = opacity;
}
