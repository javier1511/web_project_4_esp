export default class FormValidator {
  constructor(parameters) {
    this._formSelector = parameters.formSelector;
    this._inputSelector = parameters.inputSelector;
    this._submitButtonSelector = parameters.submitButtonSelector;
    this._inactiveButtonClass = parameters.inactiveButtonClass;
    this._inputErrorClass = parameters.inputErrorClass;
    this._errorClass = parameters.errorClass;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _isInputListEmpty(inputList) {
    return inputList.every((inputElement) => {
      return inputElement.value.trim() === "";
    });
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    const hasInvalidInput = this._hasInvalidInput(inputList);
    const isInputListEmpty = this._isInputListEmpty(inputList);

    if (hasInvalidInput || isInputListEmpty) {
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitButtonSelector);

    const toggleButtonState = () => {
      const hasInvalidInput = this._hasInvalidInput(inputList);
      const isInputListEmpty = this._isInputListEmpty(inputList);

      if (hasInvalidInput || isInputListEmpty) {
        buttonElement.classList.add(this._inactiveButtonClass);
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
      }
    };

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        toggleButtonState();
      });
    });

    toggleButtonState();
  }

  _resetForm(formElement) {
    formElement.reset();
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitButtonSelector);
    buttonElement.classList.add(this._inactiveButtonClass);
    inputList.forEach((inputElement) => {
      this._hideInputError(formElement, inputElement);
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement);
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._resetForm(formElement);
      });
    });
  }
}
