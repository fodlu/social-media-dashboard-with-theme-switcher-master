const body = document.body;
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");

light.addEventListener("click", () => {
  body.classList.add("light");
  body.style.transition = "0.7s";
});

dark.addEventListener("click", () => {
  body.classList.remove("light");
});
