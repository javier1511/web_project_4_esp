import PopupWithImage from "./PopupWithImage.js";
import Api from "./Api.js";

export class Card {
  constructor(data, cardSelector) {
    this.name = data.name;
    this.link = data.link;
    this.likes = data.likes.length;
    this._cardSelector = cardSelector;
    this.cardId = data.id;
    this._cardLike = this._cardLike.bind(this);
    this._api = new Api();
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__container")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._trashIcon = this._element.querySelector(".sites__trash-icon");
    this._descriptionIcon = this._element.querySelector(
      ".sites__description-icon"
    );
    this._picture = this._element.querySelector(".sites__picture");
    this._descriptionText = this._element.querySelector(".sites__description-text");
    const cardsLikesCount = this._element.querySelector(".sites__description-counter");
    cardsLikesCount.textContent = this._likes;
    this._picture.src = this.link;
    this._descriptionText.textContent = this.name;

    this._setEventListeners();
    return this._element;
  }

  _cardRemove() {
    this._element.remove();
  }

 async _cardLike(e, cardId) {
  if(!e.target.classList.contains(".sites__description-icon-active")){
    e.target.classList.add(".sites__description-icon-active");
    await this._api.addLike(cardId);
    }else{
      e.target.classList.remove(".sites__description-icon-active");
      await this._api.removeLike(cardId);
    }
    
  }

  _setEventListeners() {
    this._trashIcon.addEventListener("click", () => {
      this._cardRemove();
    });
    this._descriptionIcon.addEventListener("click", (e) => {
      console.log(this._cardId);
      this._cardLike(e, this._cardId);
    });
    this._picture.addEventListener("click", (evt) => {
      const openMyPopup = new PopupWithImage();
      openMyPopup.handleOpenPopup(evt.target.src, evt.target.alt);
    });
  }
}
