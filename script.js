//  homework 3 Image Switcher (Animal Toggle)
// Question: Create a button that switches an image between a cat and a dog.

const img = document.querySelector("#animal");
const btn = document.querySelector("#animalBtn");

let showingCat = true;

btn.addEventListener("click", () => {
  if (showingCat) {
    img.src = "https://placedog.net/200/200";
    btn.textContent = "Show Cat";
  } else {
    img.src = "img/smallCat.jpg";
    btn.textContent = "Show Dog";
  }
  showingCat = !showingCat;
});
