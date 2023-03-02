//CODIGO PARA PRIMER FORMULARIO//
const form = document.querySelector(".form");
const formInput = form.querySelector(".form__input");
const formError = form.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__error-message_active");
};
const hasInvalidInput = (inputList) => {
  // itera sobre el array utilizando el método some()
  return inputList.some((inputElement) => {
        // Si el campo no es válido, el callback devolverá true.
    // El método se detendrá entonces, y la función hasInvalidInput() devolverá true
    // hasInvalidInput devuelve true

    return !inputElement.validity.valid;
  })
};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__error-message_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};



const toggleButtonState = (inputList, buttonElement) => {
  // Si hay al menos una entrada que no es válida
  if (hasInvalidInput(inputList)) {
    // hace que el botón esté inactivo
    buttonElement.classList.add("form__submit_inactive");
  } else {
    // en caso contrario, lo hace activo
    buttonElement.classList.remove("form__submit_inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
   const buttonElement = formElement.querySelector(".form__button")

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
  });
});
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error-message_active"
});

// La función toma un array formado por campos

