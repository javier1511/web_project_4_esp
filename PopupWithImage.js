import { MasterPopup } from "./Popup.js";
import initialCards from "./constants.js";


const popupImage = document.querySelector(".modal__picture");
const popupText = document.querySelector(".modal__text-subtitle");

export class PopupWithImage extends MasterPopup {
  constructor(){
    super(".modal");
  }
  handleOpenPopup(card){
    popupText.textContent = card.name;
    popupImage.src = card.link;
  }
}

const openModals = document.querySelectorAll(".sites__picture");
const closeModal = document.querySelector(".modal__close-button");
const popupWithImage = new PopupWithImage();

openModals.forEach((openModal, index) => {
  openModal.addEventListener("click", () => {
    popupWithImage.handleOpenPopup(initialCards[index]);
    popupWithImage.openPopup();
  });
});

closeModal.addEventListener("click", () => {
  popupWithImage.closePopup();
});

document.addEventListener("keydown", (evt) => {
  popupWithImage.handleClose(evt);
});

popupWithImage.element.addEventListener("click", (evt) => {
  popupWithImage.handleClickClosePopupOutsideElement(evt);
});
