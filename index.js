const overlay = document.querySelector(".overlay");
let popupDisplay = document.querySelector(".popup__opened");
let profileTitle = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");
let inputName = document.querySelector("#name");
let inputJob = document.querySelector("#job");
let popupContainer = document.querySelector(".popup__container");
let popup = document.querySelector(".popup");
let openPopupButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-icon");
let saveButton = document.querySelector("#save__button");
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
