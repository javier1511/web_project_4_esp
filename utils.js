

import { Card } from "./Card.js";
import {profileTitle, profileJob, inputName, inputJob, popup, openPopupButton, closeButton,
  saveButton, adderCloseButton, addCardButton, addingCardForm, overlay, adderTitle, adderUrl, sites, mySitesPicture } from "./constants.js"
  inputName.value = profileTitle.textContent;
  inputJob.value = profileJob.textContent;





addingCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = {
    name:adderTitle.value,link:adderUrl.value
  }
  const cardsSource = new Card(data, ".template").generateCard();
  sites.prepend(cardsSource);
});

/*
const card = new Card(data, ".template", (evt) =>{
  const data = {
   card : ".sites__picture"
  }
  const openCardModal = new PopupWithImage(".sites__picture");
  openCardModal.openPopup(evt);
})
/*