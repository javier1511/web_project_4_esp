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

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];
const images = document.querySelectorAll(".sites__picture-container img");
  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modal__picture");
  const modalTxt = document.querySelector(".modal__text-subtitle");
  const closeButtonModal = document.querySelector(".modal__close-button");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      modalImg.src = image.src;
      modalTxt.innerHTML = image.alt;
      modal.classList.add("appear");


      closeButtonModal.addEventListener("click", () => {
        modal.classList.remove("appear");
      })
    });
  });
  function renderImage (){
    const sites = document.querySelector(".sites");
    const removeButton = document.querySelector(".sites__trash-icon");
    const loveIcon = document.querySelector(".sites__description-icon");
    for (const card of initialCards){
     const div = document.createElement("div");
     div.classList.add("cards__container");
     const container = document.createElement("div");
     /*container.src = card.link;*/
     container.classList.add("sites__picture-container");
     const trashButton = document.createElement("img");
     trashButton.classList.add("sites__trash-icon");
     trashButton.src = removeButton.src;
     const sitesDescription = document.createElement("div");
     sitesDescription.classList.add("sites__description-container");
     const text = document.createElement("p");
     text.classList.add("sites_description-text");
     text.textContent = card.name;
     const likeIcon = document.createElement("img");
     likeIcon.classList.add("sites__description-icon");
     likeIcon.src = loveIcon.src;
     sitesDescription.appendChild(likeIcon);
     sitesDescription.appendChild(text);
     div.appendChild(container);
     container.appendChild(trashButton);
     div.appendChild(sitesDescription);
     sites.appendChild(div);
 }
    }

    renderImage();
