import { MasterPopup } from "./Popup.js";

const popupImage = document.querySelector(".modal__picture");
const popupText = document.querySelector(".modal__text-subtitle");

export class PopupWithImage extends MasterPopup {
  constructor() {
    super(".modal");
    this.popupImage = document.querySelector(".modal__picture");
  }

  handleOpenPopup(src, alt) {
    popupText.textContent = alt;
    this.popupImage.src = src;
    super.openPopup();
  }

  handleClickClosePopupOutsideElement(evt) {
    if (!evt.target.closest(".modal__picture")) {
      super.closePopup();
    }
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


