import Api from "./Api.js";
import FormValidator from "./FormValidator.js";

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
    this._formValidator = new FormValidator({
        formSelector: ".form",
        inputSelector: ".form__input",
        submitButtonSelector: ".form__button",
        inactiveButtonClass: "form__submit_inactive",
        inputErrorClass: "form__input_type_error",
        errorClass: "form__error-message_active",
    });
  }

  async submitForm(evt) {
    evt.preventDefault();
    const name = this.inputName.value;
    const about = this.inputJob.value;
    const patchUser = await this._api.patchUserProfile(name, about);
    this.profileTitle.textContent = patchUser.name;
    this.profileJob.textContent = patchUser.about;
    this.popup.closePopup();
  }

  async getUserInfo() {
    const getUserData = await this._api.getUserProfile();
    this.profileTitle.textContent = getUserData.name;
    this.profileJob.textContent = getUserData.about;
    this.inputName.value = getUserData.name;
    this.inputJob.value = getUserData.about;
    const profilePicture = document.querySelector(".profile__picture");
    profilePicture.src = getUserData.avatar;
    this._formValidator._checkInputValidity(this.inputName.form, this.inputName);
    this._formValidator._checkInputValidity(this.inputJob.form, this.inputJob);
    this._formValidator._toggleButtonState(
      Array.from(this.inputName.form.querySelectorAll(this._formValidator._inputSelector)),
      this.saveButton
    );
  }

  async changeUserAvatar(evt) {
    evt.preventDefault();
    const avatar = this.urlValue.value;
    try {
      const patchUserAvatar = await this._api.changeAvatarProfile(avatar);
      const profilePicture = document.querySelector(".profile__picture");
      profilePicture.src = avatar;
      console.log(patchUserAvatar);
      this.closeAvatarPopup(evt);
    } catch (err) {
      console.log(err);
    }
  }

  openAvatarPopup() {
    const avatarEdit = document.querySelector(".avatar");
    avatarEdit.classList.add("popup__opened");
  }

  closeAvatarPopup(evt) {
    evt.preventDefault();
    const avatarEdit = document.querySelector(".avatar");
    avatarEdit.classList.remove("popup__opened");
  }

  setEventListeners() {
    this.saveButton.addEventListener("click", (evt) => {
      this.saveButton.textContent = "Guardando...";
      this.submitForm(evt);

      setTimeout(() => {
        this.saveButton.textContent = "Guardar";
      }, 2000);
    });
    this.openProfileAvatar.addEventListener("click", (evt) => {
      this.openAvatarPopup(evt);
    });
    this.closeProfileAvatar.addEventListener("click", (evt) => {
      this.closeAvatarPopup(evt);
    });
    this.saveAvatar.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.saveAvatar.textContent = "Guardando...";
      this.changeUserAvatar(evt);

      setTimeout(() => {
        this.saveAvatar.textContent = "Guarda";
      }, 2000);
    });

    this._formValidator.enableValidation();
  }
}
