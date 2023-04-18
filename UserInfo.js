import { MasterPopup } from "./Popup.js";

document.addEventListener("DOMContentLoaded", () => {
  const userData = {
      inputName: "#name",
      inputJob: "#job",
      profileTitle: ".profile__title",
      profileJob: ".profile__subtitle"
  };

  class UserInfo {
      constructor(userData) {
          this.inputName = document.querySelector(userData.inputName);
          this.inputJob = document.querySelector(userData.inputJob);
          this.profileTitle = document.querySelector(userData.profileTitle);
          this.profileJob = document.querySelector(userData.profileJob);
          this.inputName.value = this.profileTitle.textContent;
          this.inputJob.value = this.profileJob.textContent;

          // Crear una instancia de la clase MasterPopup
          const myPopup = new MasterPopup(userData.popup);

          this.submitButton.addEventListener("click", (evt) => {
              // Llamar al método closePopup() en la instancia de MasterPopup
              myPopup.closePopup();
              this.submitForm(evt);
          });
      }
      submitForm(evt) {
          evt.preventDefault();
          this.profileTitle.textContent = this.inputName.value;
          this.profileJob.textContent = this.inputJob.value;
      }
  }

  const userInfo = new UserInfo(userData);
});
