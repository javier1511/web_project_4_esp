import { MasterPopup } from "./Popup.js";
import initialCards from "./constants.js";

const popupImage = document.querySelector(".modal__picture");
const popupText = document.querySelector(".modal__text-subtitle");

export class PopupWithImage extends MasterPopup {
  constructor() {
    super(".modal");
  }
  handleOpenPopup(src, alt) {
    popupText.textContent = alt;
    popupImage.src = src;
    super.openPopup();
  }
}

const closeModal = document.querySelector(".modal__close-button");
const popupWithImage = new PopupWithImage();

closeModal.addEventListener("click", () => {
  popupWithImage.closePopup();
});

document.addEventListener("keydown", (evt) => {
  popupWithImage.handleClose(evt);
});

popupWithImage.element.addEventListener("click", (evt) => {
  popupWithImage.handleClickClosePopupOutsideElement(evt);
});
