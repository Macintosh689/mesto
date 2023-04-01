import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._btn = this._form.querySelector(".popup__button");
    this._btnText = this._btn.textContent;
    this._inputList = this._form.querySelectorAll(".popup__input");
  }
  
  _getInputValues() {
    const data = {};
    this._inputList.forEach((element) => {
      data[element.name] = element.value;
    });
    return data;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._form.reset();
    });
    super.setEventListeners();
  }

  showLoading(data) {
    if (data) {
      this._btn.textContent = "Сохранение...";
    } else {
      this._btn.textContent = this._btnText;
    }
  }

  close() {
    super.close();
  }
}
