let inputName = document.querySelector(".popup__new_name");
let inputJob = document.querySelector(".popup__new_job");
let profileFullName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile-description__job");
let overlay = document.querySelector(".overlay");
let popup = document.querySelector(".popup");
let openFormButton = document.querySelector(".edit-button");
let closeButton = document.querySelector(".popup__close-select");
let saveButton = document.querySelector(".popup__save-button");
inputName.value = profileFullName.textContent;
inputJob.value = profileJob.textContent;

function toggleForm() {
  overlay.classList.toggle("overlay_visible");
  popup.classList.toggle("popup_visible");
}

openFormButton.addEventListener("click", toggleForm);
closeButton.addEventListener("click", toggleForm);

function saveChanges() {
  profileFullName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  overlay.classList.toggle("overlay_visible");
  popup.classList.toggle("popup_visible");
}

saveButton.addEventListener("click", saveChanges);

function submitForm(evt) {
  evt.preventDefault;
}

saveButton.addEventListener("click", submitForm);