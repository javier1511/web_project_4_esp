const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");

// Escribe el código de la primera función, que muestra el elemento erróneo
const showInputError = (element) => {
  element.classList.add("form__input_type_error");
};

// Escribe el código de la segunda función, que oculta el elemento erróneo
const hideInputError = (element) => {
  element.classList.remove("form__input_type_error");
};

// Escribe el código de la tercera función, que comprueba si el campo es válido
const isValid = () => {
  if (!formInput.validity.valid) {
    // Si NO lo es (!), muestra el elemento erróneo
    showInputError(formInput);
  } else {
    // Si es válido, oculta el elemento erróneo
    hideInputError(formInput);
  }
};
 
formElement.addEventListener("submit", function (evt) {
  // Cancela la acción del navegador por defecto, de modo que al hacer clic en el botón "Enviar" no se actualice la página
  evt.preventDefault();
});

// Llama a la función isValid() para cada entrada de caracteres
formInput.addEventListener("input", isValid); 