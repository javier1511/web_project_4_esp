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

function toggle() {
  popup.classList.toggle("popup__opened");
  overlay.classList.toggle("overlay__visible");
}

openPopupButton.addEventListener("click", toggle);
closeButton.addEventListener("click", toggle);

function saveForm() {
  popup.classList.toggle("popup__opened");
  overlay.classList.toggle("overlay__visible");
}

saveButton.addEventListener("click", saveForm);

function submitForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
}
saveButton.addEventListener("click", submitForm);

