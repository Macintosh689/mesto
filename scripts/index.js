// попап редактирования профиля
const popupEditProfile = document.querySelector('.popup_form_edit');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
const formEditProfile = document.forms.formEditProfile;
const authorNameInput = document.querySelector('.popup__input_type_name-edit');
const authorJobInput = document.querySelector('.popup__input_type_description-edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// попап добавления карточки
const popupAddCard = document.querySelector('.popup_form_add');
const popupOpenButtonAdd = document.querySelector('.profile__add-button');
const cardNameInput = document.querySelector('.popup__input_type_name-add');
const cardLinkInput = document.querySelector('.popup__input_type_link-add');
const formAddCard = document.forms.formAddCard;

// попап с открытой картинкой
const popupOpenImage = document.querySelector('.popup_form_image');
const popupOpenImagePhoto = popupOpenImage.querySelector('.popup__photo');
const popupOpenImageTitle = popupOpenImage.querySelector('.popup__title_form_image');

// темплейт
const templateCard = document.querySelector('#template-card').content;
const cardGallery = document.querySelector('.cards-gallery');
const card = templateCard.querySelector('.card');

//открытие попапа редактирования профиля и сохранение введенных значений в профиль
const openPopupEditProfile = function () {
  authorNameInput.value = profileName.textContent;
  authorJobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
  toggleButtonState(formEditProfile, formValidationConfig);
}

// функция для слушателя событий формы попапа редактирования профиля
function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = authorNameInput.value;
  profileDescription.textContent = authorJobInput.value;
  closePopup(popupEditProfile);
}

// функция закрытия попапа при нажатии на оверлей
const clickOnOverlay = function(event, popup) {
  const target = event.target;
  if (target === popup) {
    closePopup(event.target);
  }
}
// функция закрытия попапа при нажатии на эскейп
const closeOnEscape = function(event, popup) {
  if(event.key === 'Escape') {
    closePopup(popup);
  }
}

// функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', (event) => {
    clickOnOverlay(event,popup);
  });
  document.addEventListener('keydown', (event) => {
    closeOnEscape(event,popup);
  });
}

// функция сохранения значений новой карточки в объекте
const addNewObject = function (event) {
  event.preventDefault();
  const card = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  }
  formAddCard.reset();
  closePopup(popupAddCard);
  addCard(card);
}

// функция закрытия попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', (event) => {
    clickOnOverlay(event,popup);
  });
  document.removeEventListener('keydown', (event) => {
    closeOnEscape(event,popup);
  })
}

// функция закрытия попапа с событием эвент
popupCloseButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    closePopup(event.target.closest('.popup'))
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


