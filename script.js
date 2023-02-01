const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".share-modal");

openModalBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
});

closeModalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});
