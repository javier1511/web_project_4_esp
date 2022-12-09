let popupContainer = document.querySelector(".popup__container");
let openPopupButton  = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let overlay = document.querySelector(".overlay")
let closeButton = document.querySelector(".popup__close-icon");
let popupDisplay =  document.querySelector(".popup__opened");
let profileTitle = document.querySelector(".profile__title");
let profileJob =  document.querySelector(".profile__subtitle");
let inputName = document.querySelector("#name");
let inputJob = document.querySelector("#job");
inputName.value = profileTitle.textContent;
inputJob.value = profileJob.textContent;




function toggle () {
popup.classList.toggle("popup__opened");
overlay.classList.toggle("overlay__visible");
}

openPopupButton.addEventListener("click", toggle);
closeButton.addEventListener("click", toggle);


function save () {
    popup.classList.toggle("popup__opened");
overlay.classList.toggle("overlay__visible");
profileTitle.textContent = inputName.value
profileJob.textContent = inputJob.value 
}
