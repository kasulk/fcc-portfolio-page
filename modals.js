const imprintButton = document.querySelector("#legal button:first-child");
const imprintModal = document.getElementById("modal-imprint");
const imprintClose = document.getElementById("close");

imprintButton.addEventListener("click", () => {
  imprintModal.style.display = "block";
});

imprintClose.addEventListener("click", () => {
  imprintModal.style.display = "none";
});
