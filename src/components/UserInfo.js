  export default class UserInfo {
    constructor(userData, popup) {
      this.inputName = document.querySelector(userData.inputName);
      this.inputJob = document.querySelector(userData.inputJob);
      this.profileTitle = document.querySelector(userData.profileTitle);
      this.profileJob = document.querySelector(userData.profileJob);
      this.inputName.value = this.profileTitle.textContent;
      this.inputJob.value = this.profileJob.textContent;
      this.saveButton = document.querySelector(userData.saveButton);
      this.popup = popup;
    }

    submitForm(evt) {
      evt.preventDefault();
      this.profileTitle.textContent = this.inputName.value;
      this.profileJob.textContent = this.inputJob.value;
      this.popup.closePopup();
    }

    setEventListeners() {
      this.saveButton.addEventListener("click", (evt) => {
        this.submitForm(evt);
      });
    }
  }
