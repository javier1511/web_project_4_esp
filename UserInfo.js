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
      }
      submitForm(evt) {
          evt.preventDefault();
          this.profileTitle.textContent = this.inputName.value;
          this.profileJob.textContent = this.inputJob.value;
      }
  }

  const userInfo = new UserInfo(userData);
});

