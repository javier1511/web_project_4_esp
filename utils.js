import { Card } from "./Card.js";
import {profileTitle, profileJob, inputName, inputJob, popup, openPopupButton, closeButton,
  saveButton, adderCloseButton, addCardButton, addingCardForm, overlay, adderTitle, adderUrl, sites } from "./index.js"
  inputName.value = profileTitle.textContent;
  inputJob.value = profileJob.textContent;



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
