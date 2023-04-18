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

export default initialCards;



export class Card {
  constructor(data, cardSelector) {
    this.name = data.name;
    this.link = data.link;
    this._cardSelector = cardSelector;
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
    this._descriptionText = this._element.querySelector(
      ".sites__description-text"
    );
    this._picture.src = this.link;
    this._descriptionText.textContent = this.name;

    this._setEventListeners();
    return this._element;
  }

  _cardRemove() {
    this._element.remove();
  }

  _cardLike(evt) {
    evt.target.classList.toggle("sites__description-icon-active");
  }

  _setEventListeners() {
    this._trashIcon.addEventListener("click", () => {
      this._cardRemove();
    });
    this._descriptionIcon.addEventListener("click", (evt) => {
      this._cardLike(evt);
    });
  }
}

initialCards.forEach((item) => {
  const card = new Card(item, ".template");
  const cardElement = card.generateCard();
  document.querySelector(".sites").append(cardElement);
});

