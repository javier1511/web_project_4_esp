import "./styles/index.css"; // agrega la importación del archivo principal de hojas de estilo
import { Section } from "./components/Section.js";
import { Card } from "./components/Card.js";
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
import Api from "./components/Api.js";

(async function () {
  const api = new Api();
  const getCards = await api.getCards();

  const cardlist = new Section(
    {
      items: getCards,
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
    openProfileAvatar: ".profile__picture-overlay",
    closeProfileAvatar:".avatar__close",
    urlValue:"#profile-url",
    saveAvatar:".avatar__button"
    
  };
  
  const popup = new MasterPopup(".popup");
  const userInfo = new UserInfo(userData, popup);
  userInfo.getUserInfo();
  
  userInfo.setEventListeners();
  
  const popupWithForm = new PopupWithForm();
  popupWithForm.setEventListeners();
  
  addingCardForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    const name = adderTitle.value;
    const link = adderUrl.value;
    const apiNewCard = new Api();
    const data = await apiNewCard.addNewCardFromApi(name, link);
    const cardsSource = new Card(data, ".template").generateCard();
    sites.prepend(cardsSource);

    
  });
  
  const adderSubmitButton = document.getElementById("adder__submit");
  adderSubmitButton.addEventListener("click", () => {
    adderSubmitButton.textContent = "Guardando...";

    
  setTimeout(() => {
    adderSubmitButton.textContent = "Crea";
  }, 2000);
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
  
})();




