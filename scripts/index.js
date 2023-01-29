// попап редактирования профиля
const popupEditProfile = document.querySelector('.popup_form_edit');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
const formEditProfile = document.forms.formEditProfile;
const AuthorNameInput = document.querySelector('.popup__info_type_name-edit');
const AuthorJobInput = document.querySelector('.popup__info_type_description-edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// попап добавления карточки
const popupAddCard = document.querySelector('.popup_form_add');
const popupOpenButtonAdd = document.querySelector('.profile__add-button');
const cardNameInput = document.querySelector('.popup__info_type_name-add');
const cardLinkInput = document.querySelector('.popup__info_type_link-add');
const formAddCard = document.forms.formAddCard;

// попап с открытой картинкой
const popupOpenImage = document.querySelector('.popup_form_image');
const popupOpenImagePhoto = popupOpenImage.querySelector('.popup__photo');
const popupOpenImageTitle = popupOpenImage.querySelector('.popup__title_form_image');

// темплейт
const templateCard = document.querySelector('#template-card').content;
const cardGallery = document.querySelector('.cards-gallery');
const card = templateCard.querySelector('.card');

// массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//открытие попапа редактирования профиля и сохранение введенных значений в профиль
const openPopupEditProfile = function () {
  AuthorNameInput.value = profileName.textContent;
  AuthorJobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
}

// функция для слушателя событий формы попапа редактирования профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = AuthorNameInput.value;
  profileDescription.textContent = AuthorJobInput.value;
  closePopup(popupEditProfile);
}

// функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}

// функция сохранения значений новой карточки в объекте
const addNewObject = function (evt) {
  evt.preventDefault();
  const card = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  }
  cardNameInput.value = '';
  cardLinkInput.value = '';
  closePopup(popupAddCard);
  addCard(card);
}

// функция закрытия попапа с удалением класса
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}

// функция закрытия попапа с событием эвент
popupCloseButtons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    closePopup(evt.target.closest('.popup'))
  })
});

// функция создания новой карточки
const createCard = function (infoCard) {
  // клон карточки
  const cloneCard = card.cloneNode(true);
  const cloneImageCard = cloneCard.querySelector('.card__image');
  cloneImageCard.src = infoCard.link;
  cloneImageCard.alt = infoCard.name;
  const imageTitle = cloneCard.querySelector('.card__title');
  imageTitle.textContent = infoCard.name;
  // кнопка удаления карточки
  const deleteButton = cloneCard.querySelector('.card__trash');
  deleteButton.addEventListener('click', function () {
    cloneCard.remove();
  });
  // присваивание значений введеных значений для попапа с открытой картинкой
  cloneImageCard.addEventListener('click', function () {
    popupOpenImagePhoto.src = cloneImageCard.src;
    popupOpenImagePhoto.alt = cloneImageCard.alt;
    popupOpenImageTitle.textContent = imageTitle.textContent;
    openPopup(popupOpenImage);
  });
  // лайк карточки
  const cardButtonLike = cloneCard.querySelector('.card__button-like');
  cardButtonLike.addEventListener('click', function () {
    cardButtonLike.classList.toggle('card__button-like_active');
  });
  return cloneCard;
}
// функция добаления новой карточки в начало галереи
const addCard = function (cloneCard) {
  cardGallery.prepend(createCard(cloneCard));
}

// функция создания карточек из каждого объекта массива
initialCards.forEach(function (card) {
  addCard(card);
});

// слушатель событий для кнопки попапа редактирования профиля
popupOpenButtonEdit.addEventListener('click', openPopupEditProfile);

// слушатель событий для формы попапа редактирования профиля
formEditProfile.addEventListener('submit', handleFormSubmit);

// слушатель событий для кнопки buttonAdd попапа добавления карточек
popupOpenButtonAdd.addEventListener('click', function () {
  openPopup(popupAddCard);
})

// слушатель событий для формы попапа добавления карточек
formAddCard.addEventListener('submit', addNewObject);


