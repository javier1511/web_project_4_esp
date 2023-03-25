const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const popupElement = document.querySelector(".modal");
const popupImage = document.querySelector(".modal__picture");
const popupCloseButton = document.querySelector(".modal__close-button");
const popupText = document.querySelector(".modal__text-subtitle");


class Card {
  constructor(data, cardSelector){
    this.name = data.name;
    this.link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.
    querySelector(".cards__container").cloneNode(true);

    return cardElement;
  }

  generateCard(){
    this._element = this._getTemplate();

    this._element.querySelector(".sites__picture").src = this.link;
    this._element.querySelector(".sites__description-text").textContent = this.name;

    this._setEventListeners();
    return this._element;
  }
  _handleOpenPopup() {
    popupText.textContent = this.name;
    popupImage.src = this.link;
    popupElement.classList.add("appear");
  }
  _handleClosePopup() {
    popupImage.src = "";
    popupElement.classList.remove("appear");
  }
  _setEventListeners(){
    this._element.querySelector(".sites__picture").addEventListener("click", () => {
      this._handleOpenPopup();
    });
    popupCloseButton.addEventListener("click", () => {
      this._handleClosePopup()
    });
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, ".template");
  const cardElement = card.generateCard();
 document.querySelector(".sites").append(cardElement);
});
