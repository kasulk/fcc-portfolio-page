import { loadHTMLFile } from "./modalsUtils.js";

const body = document.body;
const legalLinks = document.querySelectorAll("#legal a");
const modals = document.querySelectorAll(".modal");
const modalContents = document.querySelectorAll(".modal-content");
const modalCloseButtons = document.querySelectorAll(".close");

loadHTMLFile("../pages/imprint.html", modalContents[0]);
loadHTMLFile("../pages/privacy.html", modalContents[1]);

//
legalLinks.forEach((legalLink, i) => {
  // show modal on link click and freeze body in bg
  legalLink.addEventListener("click", () => {
    setModalDisplayAndBodyFreeze(modals[i], "block", "hidden");
  });
  // close modal on click on close button and defreeze body
  modalCloseButtons[i].addEventListener("click", () => {
    setModalDisplayAndBodyFreeze(modals[i], "none", "auto");
  });
});

// close modal on click outside of modal-content
window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      setModalDisplayAndBodyFreeze(modal, "none", "auto");
    }
  });
});

//
function setModalDisplayAndBodyFreeze(modal, modalDisplayStyle, bodyOverflow) {
  modal.style.display = modalDisplayStyle;
  body.style.overflow = bodyOverflow;
}
