class PopupFormRemoveCard extends MasterPopup {
    constructor() {
      super(".confirmation-form");
    }
  }
  
  const btnOpenConfirmationForm = document.querySelector(".sites__trash-icon");
  const btnCloseConfirmatioNFrom = document.querySelector(".confirmation__form-close");
  
  const popupRemoveCard = new PopupFormRemoveCard();
  
  btnOpenForm.addEventListener("click", () => {
    popupRemoveCard.openPopup();
  });
  
  btnCloseForm.addEventListener("click", () => {
    popupRemoveCard.closePopup();
  });
  
  document.addEventListener("keydown", (evt) => {
    popupRemoveCard.handleClose(evt);
  });
  
  popup.element.addEventListener("click", (evt) => {
    popupRemoveCard.handleClickClosePopupOutsideElement(evt);
  });
  
  