 export class Card {
  constructor(data, templateSelector, saveNewValues) {
    this._data = data;
    this._name = this._data.name;
    this._link = this._data.link;
    this._templateSelector = templateSelector;
    this._cardElement = this._templateSelector.querySelector('.card');
    this._saveNewValues = saveNewValues;
}
    // создание новой карточки
    createCard() {
    // клон карточки
    this._cloneCard = this._cardElement.cloneNode(true);
    this._cloneImageCard = this._cloneCard.querySelector('.card__image');
    this._cloneImageCard.src = this._data.link;
    this._cloneImageCard.alt = this._data.name;
    this._imageTitle = this._cloneCard.querySelector('.card__title');
    this._imageTitle.textContent = this._data.name;
    // кнопка удаления карточки
    this._deleteButton = this._cloneCard.querySelector('.card__trash');
    this._deleteButton.addEventListener('click', () => {
      this._cloneCard.remove();
    });
    // присваивание введеных значений для попапа с открытой картинкой
    this._cloneImageCard.addEventListener('click', () => {
    this._saveNewValues(this._data.link, this._data.name);
    });
    // лайк карточки
    this._cardButtonLike = this._cloneCard.querySelector('.card__button-like');
    this._cardButtonLike.addEventListener('click', () => {
    this._cardButtonLike.classList.toggle('card__button-like_active');
    });
    return this._cloneCard;
  }
}


