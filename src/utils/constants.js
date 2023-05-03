
export const sites = document.querySelector(".sites");
export const profileTitle = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");
export const inputName = document.querySelector("#name");
export const inputJob = document.querySelector("#job");
export const popup = document.querySelector(".popup");
export const openPopupButton = document.querySelector(".profile__edit-button");
export const closeButton = document.querySelector(".popup__close-icon");
export const saveButton = document.querySelector("#save__button");
export const adderCloseButton = document.getElementById("adder__close-icon");
export const addCardButton = document.querySelector(".profile__plus-button");
export const addingCardForm = document.querySelector(".adder");
export const overlay = document.querySelector(".overlay");
export const adderTitle = document.querySelector("#title");
export const adderUrl = document.querySelector("#url");
export const mySitesPicture = document.querySelector(".sites__picture");

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

  export default initialCards;