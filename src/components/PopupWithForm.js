import MasterPopup from "./Popup.js";

export default class PopupWithForm extends MasterPopup {
  constructor(){
    super(".adder");
  }

  setEventListeners(){
    const btnOpenAdder = document.querySelector(".profile__plus-button");
    const btnCloseAdder =  document.querySelector(".adder__close-icon");
    const popupWithForm = this;

    btnOpenAdder.addEventListener("click", () => {
      popupWithForm.openPopup();
    });

    btnCloseAdder.addEventListener("click", () => {
      popupWithForm.closePopup();
    });

    document.addEventListener("keydown", (evt) => {
      popupWithForm.handleClose(evt);
    });

    document.addEventListener("submit", (evt) => {
      popupWithForm.closePopup(evt);
    });

    popupWithForm.element.addEventListener("click", (evt) => {
      popupWithForm.handleClickClosePopupOutsideElement(evt);
    });
  }
}



