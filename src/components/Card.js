import Api from "./Api.js";
import PopupWithImage from "./PopupWithImage.js";

export class Card {
  constructor(data, cardSelector) {
    this.name = data.name;
    this.ownerId = data.owner._id;
    this.link = data.link;
    this.likes = data.likes.length;
    this._cardSelector = cardSelector;
    this.cardId = data._id;
    this._cardLike = this._cardLike.bind(this);
    this._api = new Api();
    this._getOwnerProfile();
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__container")
      .cloneNode(true);

    return cardElement;
  }

  async _getOwnerProfile() {
    try {
      this._toggleTrashIcon();
    } catch (err) {
      console.log(err);
    }
  }

  async _toggleTrashIcon() {
    try {
      const currentUser = await this._api.getUserProfile();
      if (currentUser._id === this.ownerId) {
        this._trashIcon.style.display = "block";
      } else {
        this._trashIcon.style.display = "none";
      }
    } catch (err) {
      console.log(err);
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._trashIcon = this._element.querySelector(".sites__trash-icon");
    this._descriptionIcon = this._element.querySelector(".sites__description-icon");
    this._picture = this._element.querySelector(".sites__picture");
    this._descriptionText = this._element.querySelector(".sites__description-text");
    const cardsLikesCount = this._element.querySelector(".sites__description-counter");
    cardsLikesCount.textContent = this.likes;
    this._picture.src = this.link;
    this._descriptionText.textContent = this.name;

    this._setEventListeners();
    this._toggleTrashIcon();
    return this._element;
  }

  _cardRemove() {
    this._element.remove();
    this._api.removeCardFromApi(this.cardId);
  }

  _openConfirmationForm() {
    const confirmationForm = document.querySelector(".confirmation-form");
    confirmationForm.classList.add("popup__opened");

    const confirmationCloseButton = confirmationForm.querySelector(".confirmation__form-close");
    confirmationCloseButton.addEventListener("click", () => {
      this._closeConfirmationForm();
    });

    const confirmButton = confirmationForm.querySelector(".confirmation__form-button");
    confirmButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._cardRemove();
      this._closeConfirmationForm();
    });
  }

  _closeConfirmationForm() {
    const confirmationForm = document.querySelector(".confirmation-form");
    confirmationForm.classList.remove("popup__opened");
  }

  async _cardLike(e, cardId) {
    if (!e.target.classList.contains("sites__description-icon-active")) {
      e.target.classList.add("sites__description-icon-active");
      await this._api.addLike(cardId);
      this.likes++;
    } else {
      e.target.classList.remove("sites__description-icon-active");
      await this._api.removeLike(cardId);
      this.likes--;
    }
    const cardsLikesCount = this._element.querySelector(".sites__description-counter");
    cardsLikesCount.textContent = this.likes;
  }

  _setEventListeners() {
    this._trashIcon.addEventListener("click", () => {
      this._openConfirmationForm();
    });

    this._descriptionIcon.addEventListener("click", (e) => {
      this._cardLike(e, this.cardId);
    });

    this._picture.addEventListener("click", (evt) => {
      const openMyPopup = new PopupWithImage();
      openMyPopup.handleOpenPopup(evt.target.src, evt.target.alt);
    });
  }
}
