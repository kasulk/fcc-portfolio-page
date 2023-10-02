const body = document.body;

const imprintButton = document.querySelector("#legal button:first-child");
const imprintModal = document.querySelector("#modal-imprint");
const imprintClose = document.querySelector("#close");

imprintButton.addEventListener("click", () => {
  imprintModal.style.display = "block";
  body.style.overflow = "hidden";
});

imprintClose.addEventListener("click", () => {
  imprintModal.style.display = "none";
  body.style.overflow = "auto";
});

// close modal window on click outside of it
window.addEventListener("click", (event) => {
  if (event.target === imprintModal) {
    imprintModal.style.display = "none";
    body.style.overflow = "auto";
  }
});
