const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEL = document.querySelector(".video-trailer");

// Button opens/shows the trailer
btnEl.addEventListener("click", () => {
  trailerContainerEL.classList.add("active");
});

// Close icon hides the trailer
closeIconEl.addEventListener("click", () => {
  trailerContainerEL.classList.remove("active");
});
