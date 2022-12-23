const img = document.querySelector(".card > img");
const description = document.querySelector(".card > .description");

img.addEventListener("click", () => {
    description.classList.toggle("hidden");
});