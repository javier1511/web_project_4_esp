const overlay = document.querySelector(".overlay");
const popupDisplay = document.querySelector(".popup__opened");
const profileTitle = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#job");
const popupContainer = document.querySelector(".popup__container");
const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-icon");
const saveButton = document.querySelector("#save__button");
inputName.value = profileTitle.textContent;
inputJob.value = profileJob.textContent;

function togglePopupVisibility() {
  popup.classList.toggle("popup__opened");
  overlay.classList.toggle("overlay__visible");
}

openPopupButton.addEventListener("click", togglePopupVisibility);
closeButton.addEventListener("click", togglePopupVisibility);

saveButton.addEventListener("click", togglePopupVisibility);

function submitForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}
saveButton.addEventListener("click", submitForm);




const images = document.querySelectorAll(".sites__picture-container img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__picture");
const modalTxt = document.querySelector(".modal__text-subtitle");
const closeButtonModal = document.querySelector(".modal__close-button");
const templateCard = document.querySelector(".template").content;
const sites = document.querySelector(".sites");



function createCards (name, link) {
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
};

function closeModal() {
  modal.classList.remove('appear');
}
document.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


// Cierra el modal cuando se presiona la tecla escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains("modal__container")) {
    closeModal();
  }
});


// Cierra el modal cuando se hace clic en el botón de cerrar
closeButton.addEventListener('click', () => {
  closeModal();
});


const likeFunction = function (evt) {
  evt.target.classList.toggle("sites__description-icon-active");
};



const addCardButton = document.querySelector(".profile__plus-button");
const addingCardForm = document.querySelector(".adder");
const adderCloseButton = document.getElementById("adder__close-icon");

function addingCardPopupVisibility() {
  addingCardForm.classList.toggle("adder__opened");
  overlay.classList.toggle("overlay__visible");
};

addCardButton.addEventListener("click", addingCardPopupVisibility);
adderCloseButton.addEventListener("click", addingCardPopupVisibility);

//añadir cards//
const adderTitle = document.querySelector("#title").value;
const adderUrl = document.querySelector("#url").value;

addingCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(adderUrl);
  const cardsSource = createCards(adderTitle, adderUrl);
  sites.prepend(cardsSource);
  addingCardPopupVisibility();
});
