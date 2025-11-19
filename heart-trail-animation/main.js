const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  console.log(event.offsetX);
  console.log(event.offsetY);
});
