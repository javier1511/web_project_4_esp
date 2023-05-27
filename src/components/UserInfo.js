import Api from "./Api.js";

export default class UserInfo {
  constructor(userData, popup) {
    this.inputName = document.querySelector(userData.inputName);
    this.inputJob = document.querySelector(userData.inputJob);
    this.profileTitle = document.querySelector(userData.profileTitle);
    this.profileJob = document.querySelector(userData.profileJob);
    this.saveButton = document.querySelector(userData.saveButton);
    this.popup = popup;
    this._api = new Api();
  }

  async submitForm(evt) {
    evt.preventDefault();
    const name = this.inputName.value;
    const about = this.inputJob.value;
    const patchUser = await this._api.patchUserProfile(name, about);
    console.log(patchUser);
    this.profileTitle.textContent = patchUser.name;
    this.profileJob.textContent = patchUser.about;
    this.popup.closePopup();
  }
  

  async getUserInfo() {
    const getUserData = await this._api.getUserProfile();
    console.log(getUserData);
    this.profileTitle.textContent = getUserData.name;
    this.profileJob.textContent = getUserData.about;
    this.inputName.value = getUserData.name;
    this.inputJob.value = getUserData.about;
    const profilePicture = document.querySelector(".profile__picture");
    profilePicture.src = getUserData.avatar;
  }

  setEventListeners() {
    this.saveButton.addEventListener("click", (evt) => {
      this.submitForm(evt);
    });
  }
}
