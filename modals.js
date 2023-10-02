const imprintLink = document.querySelector("#legal span:first-child");
const modal = document.getElementById("modal-imprint");
const close = document.getElementById("close");

imprintLink.addEventListener("click", () => {
  console.log("clicked");
  modal.style.display = "block";
  console.log("modal", modal);
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
