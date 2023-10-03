const body = document.body;

// // imprint modal
// const imprintLink = document.querySelector("#legal a:first-child");
// const imprintModal = document.querySelector("#modal-imprint");
// const imprintClose = document.querySelector("#close-imprint");

// imprintLink.addEventListener("click", () => {
//   imprintModal.style.display = "block";
//   body.style.overflow = "hidden";
// });

// imprintClose.addEventListener("click", () => {
//   imprintModal.style.display = "none";
//   body.style.overflow = "auto";
// });

// // close modal window on click outside of it
// // window.addEventListener("click", (event) => {
// //   if (event.target === imprintModal) {
// //     imprintModal.style.display = "none";
// //     body.style.overflow = "auto";
// //   }
// // });

// // privacy modal
// const privacyLink = document.querySelector("#legal a:last-child");
// const privacyModal = document.querySelector("#modal-privacy");
// const privacyClose = document.querySelector("#close-privacy");

// privacyLink.addEventListener("click", () => {
//   privacyModal.style.display = "block";
//   body.style.overflow = "hidden";
// });

// privacyClose.addEventListener("click", () => {
//   privacyModal.style.display = "none";
//   body.style.overflow = "auto";
// });

// // close modal window on click outside of it
// window.addEventListener("click", (event) => {
//   if (event.target === imprintModal) {
//     imprintModal.style.display = "none";
//     body.style.overflow = "auto";
//   }

//   if (event.target === privacyModal) {
//     privacyModal.style.display = "none";
//     body.style.overflow = "auto";
//   }
// });

//! hot stuff
const legalLinks = document.querySelectorAll("#legal a");
// console.log(legalLinks);
const modals = document.querySelectorAll(".modal");
// console.log(modals);
const modalCloseButtons = document.querySelectorAll(".close");
// console.log(modalCloseButtons);

legalLinks.forEach((legalLink, i) => {
  legalLink.addEventListener("click", () => {
    console.log("yes!");
    modals[i].style.display = "block";
    body.style.overflow = "hidden";
  });
  modalCloseButtons[i].addEventListener("click", () => {
    console.log("close button geklcikt!");
    modals[i].style.display = "none";
    body.style.overflow = "auto";
  });
});

// window.addEventListener("click", (event) => {
//   if (event.target === imprintModal) {
//     imprintModal.style.display = "none";
//     body.style.overflow = "auto";
//   }

//   if (event.target === privacyModal) {
//     privacyModal.style.display = "none";
//     body.style.overflow = "auto";
//   }
// });
