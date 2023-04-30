

export class MasterPopup {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  openPopup() {
    this.element.classList.add("popup__opened");
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    overlay.style.opacity = 0.5;
  }

  handleClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  closePopup() {
    this.element.classList.remove("popup__opened");
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    
    const form = this.element.querySelector('form');
    if (form) {
      form.reset();
    }
  }

  handleClickClosePopupOutsideElement(evt) {
    if (evt.target.classList.contains("popup__opened")) {
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

