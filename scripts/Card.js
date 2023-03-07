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
    this._deleteButton = this._cloneCard.querySelector('.card__trash');
    this._cardButtonLike = this._cloneCard.querySelector('.card__button-like');
    this._setEventListeners();
    return this._cloneCard;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });
    this._cardButtonLike.addEventListener('click', () => {
      this._toggleLike();
    });
    this._cloneImageCard.addEventListener('click', () => {
      this._handleImageClick();
    });
  }

  _deleteCard() {
    this._cloneCard.remove();
  }
  _toggleLike() {
    this._cardButtonLike.classList.toggle('card__button-like_active');
  }
  _handleImageClick() {
    this._saveNewValues(this._data.link, this._data.name);
  }

}


