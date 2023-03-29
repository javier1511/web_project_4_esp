import { Card } from "./Card.js";
import {profileTitle, profileJob, inputName, inputJob, popup, openPopupButton, closeButton,
  saveButton, adderCloseButton, addCardButton, addingCardForm, overlay, adderTitle, adderUrl, sites } from "./index.js"
  inputName.value = profileTitle.textContent;
  inputJob.value = profileJob.textContent;

// profile popup//

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


function addingCardPopupVisibility() {
  addingCardForm.classList.toggle("adder__opened");
  overlay.classList.toggle("overlay__visible");
};

addCardButton.addEventListener("click", addingCardPopupVisibility);
adderCloseButton.addEventListener("click", addingCardPopupVisibility);


//añadir cards//

addingCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = {
    name:adderTitle.value,link:adderUrl.value
  }
  const cardsSource = new Card(data, ".template").generateCard();
  sites.prepend(cardsSource);
  addingCardPopupVisibility();
});
