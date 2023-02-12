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
const images = document.querySelectorAll(".sites__picture-container img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__picture");
const modalTxt = document.querySelector(".modal__text-subtitle");
const closeButtonModal = document.querySelector(".modal__close-button");

const templateCard = document.querySelector(".template").content;
const sites = document.querySelector(".sites");

function createCards(name, link) {
  const card = templateCard.cloneNode(true);
  const likeButton = card.querySelector(".sites__description-icon");
  likeButton.addEventListener("click", function (evt) {
    likeButton.classList.toggle("sites__description-icon-active");
  });
  const deleteCard = card.querySelector(".sites__trash-icon");
  deleteCard.addEventListener("click", function (evt) {
    const cardToRemove = deleteCard.closest(".cards__container").remove();
  });
  card.querySelector(".sites__picture").src = link;
  card.querySelector(".sites__description-text").textContent = name;
  const cardLink = card.querySelector(".sites__picture");
  cardLink.addEventListener("click", () => {
    modalImg.src = link;
    modalTxt.innerHTML = name;
    modal.classList.add("appear");
    closeButtonModal.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
  return card;
}
const likeFunction = function (evt) {
  evt.target.classList.toggle("sites__description-icon-active");
};
initialCards.forEach(function (element) {
  const card = createCards(element.name, element.link);
  sites.append(card);
});

const addCardButton = document.querySelector(".profile__plus-button");
const addingCardForm = document.querySelector(".adder");
const adderCloseButton = document.getElementById("adder__close-icon");

function addingCardPopupVisibility() {
  addingCardForm.classList.toggle("adder__opened");
  overlay.classList.toggle("overlay__visible");
}

addCardButton.addEventListener("click", addingCardPopupVisibility);
adderCloseButton.addEventListener("click", addingCardPopupVisibility);

//añadir cards//
const adderTitle = document.querySelector("#title").value;
const adderUrl = document.querySelector("#url").value;

addingCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(adderUrl);
  const bubble = createCards(adderTitle, adderUrl);
  sites.prepend(bubble);
  addingCardPopupVisibility();
});
