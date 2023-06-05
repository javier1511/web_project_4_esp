import Api from "./Api.js";

export default class UserInfo {
  constructor(userData, popup) {
    this.inputName = document.querySelector(userData.inputName);
    this.inputJob = document.querySelector(userData.inputJob);
    this.urlValue = document.querySelector(userData.urlValue);
    this.saveAvatar = document.querySelector(userData.saveAvatar);
    this.profileTitle = document.querySelector(userData.profileTitle);
    this.profileJob = document.querySelector(userData.profileJob);
    this.saveButton = document.querySelector(userData.saveButton);
    this.openProfileAvatar = document.querySelector(userData.openProfileAvatar);
    this.closeProfileAvatar = document.querySelector(userData.closeProfileAvatar);
    this.popup = popup;
    this._api = new Api();
  }

  async submitForm(evt) {
    evt.preventDefault();
    console.log(this.submitForm);
    const name = this.inputName.value;
    const about = this.inputJob.value;
    const patchUser = await this._api.patchUserProfile(name, about);
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

  async changeUserAvatar(evt) {
    evt.preventDefault();
    const avatar = this.urlValue.value; 
    try {
      const patchUserAvatar = await this._api.changeAvatarProfile(avatar);
      const profilePicture = document.querySelector(".profile__picture");
      profilePicture.src = avatar;
      console.log(patchUserAvatar);
    } catch (err) {
      console.log(err);
    }
  }
  


  openAvatarPopup() {
    const avatarEdit = document.querySelector(".profile-form");
    avatarEdit.classList.add("popup__opened");
  }

  closeAvatarPopup(evt) {
    evt.preventDefault();
    const avatarEdit = document.querySelector(".profile-form");
    avatarEdit.classList.remove("popup__opened");
  }

  setEventListeners() {
    this.saveButton.addEventListener("click", (evt) => {
      this.submitForm(evt);
    });
    this.openProfileAvatar.addEventListener("click", (evt) => {
      this.openAvatarPopup(evt);
    });
    this.closeProfileAvatar.addEventListener("click", (evt) => {
      this.closeAvatarPopup(evt);
    });
    this.saveAvatar.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.changeUserAvatar(evt);
    })

  }
}
