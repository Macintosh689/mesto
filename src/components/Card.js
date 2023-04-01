export class Card {
  constructor( data, templateSelector, handleCardClick, handleDelete, getId, likeCardApi, dislikeCardApi ) {
    this._data = data;
    this._name = this._data.name;
    this._link = this._data.link;
    this._templateSelector = templateSelector;
    this._getId = getId;
    this._handleDelete = handleDelete;
    this._cardElement = this._templateSelector.querySelector(".card");
    this._handleCardClick = handleCardClick;
    this._likeCardApi = likeCardApi;
    this._dislikeCardApi = dislikeCardApi;
    this._isLiked = data.likes.length !== 0 ? data.likes.find((item) => item._id === this._getId()) : false;
  }

  // создание новой карточки
  createCard() {
    this._cloneCard = this._cardElement.cloneNode(true);
    this._likesCount = this._cloneCard.querySelector(".card__like-counter");
    this.getLikesCount(this._data);
    // клон карточки
    this._cloneImageCard = this._cloneCard.querySelector(".card__image");
    this._cloneImageCard.src = this._data.link;
    this._cloneImageCard.alt = this._data.name;
    this._imageTitle = this._cloneCard.querySelector(".card__title");
    this._imageTitle.textContent = this._data.name;
    this._deleteButton = this._cloneCard.querySelector(".card__trash");
    this._cardButtonLike = this._cloneCard.querySelector(".card__button-like");
    this._isLiked ? this._cardButtonLike.classList.add("card__button-like_active") : null;
    this._isOwner(this._data);
    this._setEventListeners();
    return this._cloneCard;
  }

  _isOwner(data) {
    if (data.owner._id !== this._getId()) {
      this._deleteButton.remove();
    }
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._handleDelete(this._data, this._deleteCard.bind(this));
    });
    this._cardButtonLike.addEventListener("click", () => {
      this._toggleLikeApi(this._data);
    });
    this._cloneImageCard.addEventListener("click", () => {
      this._handleCardClick(this._data.link, this._data.name);
    });
  }

  getLikesCount(data) {
    this._likesCount.textContent = data.likes.length;
  }

  _deleteCard() {
    this._cardElement.remove();
    this._cloneCard.remove();
    this._cardElement = null;
  }

  toggleLike(data) {
    const res = data.likes.some((elem) => {
      return elem._id === this._getId();
    });
    if (!res) {
      this._dislikeCard();
    } else {
      this._likeCard();
    }
  }
  _dislikeCard() {
    this._cardButtonLike.classList.remove("card__button-like_active");
  }
  _likeCard() {
    this._cardButtonLike.classList.add("card__button-like_active");
  }

  _toggleLikeApi(data) {
    if (this._cardButtonLike.classList.contains("card__button-like_active")) {
      this._dislikeCardApi(data._id);
    } else {
      this._likeCardApi(data._id);
    }
  }

  _handleImageClick() {
    this._handleCardClick(this._data.link, this._data.name);
  }
}
