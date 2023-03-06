export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._buttonSubmit = this._form.querySelector(this._config.submitButtonSelector);
  }

  //отключениe отправки формы
  _disableSubmit(event) {
    event.preventDefault();
  }

  // наложение валидации на форму
  enableFormValidation() {
    this._addInputListeners();
    // переключение состояния кнопки после каждого изменения инпута в форме
    this._form.addEventListener('input', () => {
      this.toggleButtonState();
    });
    // переключаем состояние кнопки
    this.toggleButtonState();
  }

  // слушатели на каждый инпут,которые при введении текста выводят или убирают текст ошибки
  _addInputListeners() {
    // проходим по каждому инпуту и вешаем обработчик событий,в котором запускается функция проверяющая валидность инпутов
    this._inputList.forEach((item) => {
      item.addEventListener('input', (event) => {
        this._handleFormInput(item)
      });
    });
  }

  // проверяем валидность формы
  _handleFormInput(item) {
    this._input = item;
    this._inputId = this._input.id;
    this._spanErrorClass = document.querySelector(`#${this._inputId}-error`);
    // проверяем валидность поля
    // в зависимости от состояния убираем класс и текст ошибки или наоборот добавляем
    if (this._input.validity.valid) {
      this._input.classList.remove(this._config.inputErrorClass);
      this._spanErrorClass.textContent = '';
    }
    else {
      this._spanErrorClass.textContent = this._input.validationMessage;
      this._input.classList.add(this._config.inputErrorClass);
    }
  }

  // переключение состояния кнопки
  toggleButtonState() {
    // проверяем валидность формы
    this._isFormValid = this._form.checkValidity();
    // если форма не валидна ставим disabled или снимаем если форма валидна
    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(this._config.inactiveButtonClass, !this._isFormValid);
  }

  resetValidation() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._handleFormInput(inputElement)
    });
  }

}
