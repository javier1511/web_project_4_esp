import initialCards from "./Card.js";
const card = initialCards;

export class MasterPopup {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  openPopup() {
    this.element.classList.add("popup__opened");
    this.element.classList.add("overlay__visible");
  }

  handleClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  closePopup() {
    this.element.classList.remove("popup__opened");
    this.element.classList.remove("overlay__visible");
  }

  handleClickClosePopupOutsideElement(evt){
    if (evt.target.classList.contains("popup__opened")){
      this.closePopup();
    }
  }
}


class Popup extends MasterPopup {
  constructor() {
    super(".popup");
  }
}

const btnOpenForm = document.querySelector(".profile__edit-button");
const btnCloseForm = document.querySelector(".popup__close-icon");

const popup = new Popup();

btnOpenForm.addEventListener("click", () => {
  popup.openPopup();
});

btnCloseForm.addEventListener("click", () => {
  popup.closePopup();
});

document.addEventListener("keydown", (evt) => {
  popup.handleClose(evt);
});

popup.element.addEventListener("click", (evt) => {
  popup.handleClickClosePopupOutsideElement(evt);
});

class PopupWithForm extends MasterPopup {
  constructor(){
    super(".adder");
  }
}

const btnOpenAdder = document.querySelector(".profile__plus-button");
const btnCloseAdder =  document.querySelector(".adder__close-icon");
const popupWithForm = new PopupWithForm();

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
})
popupWithForm.element.addEventListener("click", (evt) => {
  popupWithForm.handleClickClosePopupOutsideElement(evt);
});

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

const openModals = document.querySelectorAll(".sites__picture"); // Cambiar a una lista de elementos
const closeModal = document.querySelector(".modal__close-button");
const popupWithImage = new PopupWithImage();

// Iterar sobre cada elemento de la lista de imágenes y agregar un evento de clic a cada uno
openModals.forEach((openModal, index) => {
  openModal.addEventListener("click", () => {
    popupWithImage.handleOpenPopup(initialCards[index]); // Usar el elemento correspondiente del arreglo initialCards
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
