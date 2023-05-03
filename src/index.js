import "./styles/index.css"; // agrega la importación del archivo principal de hojas de estilo
import { Section } from "./components/Section.js";
import { Card } from "./components/Card.js";
import initialCards from "./utils/constants.js";
import MasterPopup from "./components/Popup.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithForm from "./components/PopupWithForm.js";
import {
  addingCardForm,
  adderTitle,
  adderUrl,
  sites,
} from "./utils/constants.js";
import FormValidator from "./components/FormValidator.js";

const cardlist = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".template");
      const cardElement = card.generateCard();
      cardlist.setItem(cardElement);
    },
  },
  ".sites"
);

cardlist.renderItems();

const userData = {
  inputName: "#name",
  inputJob: "#job",
  profileTitle: ".profile__title",
  profileJob: ".profile__subtitle",
  saveButton: "#save__button",
};

const popup = new MasterPopup(".popup");
const userInfo = new UserInfo(userData, popup);

userInfo.setEventListeners();

const popupWithForm = new PopupWithForm();
popupWithForm.setEventListeners();

addingCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = {
    name: adderTitle.value,
    link: adderUrl.value,
  };
  const cardsSource = new Card(data, ".template").generateCard();
  sites.prepend(cardsSource);
});

const parameters = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error-message_active",
};

const formValidator = new FormValidator(parameters);
formValidator.enableValidation();
