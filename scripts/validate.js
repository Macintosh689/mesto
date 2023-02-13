const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
};

// функция отключения отправки формы
function disableSubmit(event) {
  event.preventDefault();
}

// функция запускающая наложение валидации на форму
function enableValidation(config) {
  // находим форму
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    // отключаем отправку формы
    enableFormValidation(form, config);
  })
}

function enableFormValidation(form, config) {
  form.addEventListener('submit', disableSubmit);
  // переключение состояния кнопки после каждого изменения инпута в форме
  form.addEventListener('input', () => {
    toggleButtonState(form, config);
  });
  // слушатель на каждый инпут,для проверки валидности введенный данных
  addInputListeners(form, config);
  toggleButtonState(form, config);
}

// функция проверяющая валидность формы
function handleFormInput(event, config) {
  const input = event.target;
  const inputId = input.id;
  const spanErrorClass = document.querySelector(`#${inputId}-error`);
  // проверяем валидность поля
  // в зависимости от состояния убираем класс и текст ошибки или наоборот добавляем
  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    spanErrorClass.textContent = '';
  }
  else {
    input.classList.add(config.inputErrorClass);
    spanErrorClass.textContent = input.validationMessage;
  }
}

// функция переключения состояния кнопки
function toggleButtonState(form, config) {
  // ищем кнопку
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  // проверяем валидность формы
  const isFormValid = form.checkValidity();
  // если форма не валидна ставим disabled или снимаем если форма валидна
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
}

// слушатели на каждый инпут,которые при введении текста выводят или убирают текст ошибки
function addInputListeners(form, config) {
  // находим все инпуты в форме
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  // проходим по каждому инпуту и вешаем обработчик событий,в котором запускается функция проверяющая валидность инпутов
  inputList.forEach(function (item) {
    item.addEventListener('input', (event) => {
      handleFormInput(event, config)
    });
  });
}

enableValidation(formValidationConfig);
