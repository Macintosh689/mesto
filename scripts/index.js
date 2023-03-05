import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./constants.js";

// попап редактирования профиля
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
const formEditProfile = document.querySelector('.popup_form_edit');
const authorNameInput = document.querySelector('.popup__input_type_name-edit');
const authorJobInput = document.querySelector('.popup__input_type_description-edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// попап добавления карточки
const popupAddCard = document.querySelector('.popup_add-card');
const formAddCard = document.querySelector('.popup_form_add');
const popupOpenButtonAdd = document.querySelector('.profile__add-button');
const cardNameInput = document.querySelector('.popup__input_type_name-add');
const cardLinkInput = document.querySelector('.popup__input_type_link-add');

// попап с открытой картинкой
const popupOpenImage = document.querySelector('.popup_form_image');
const popupOpenImagePhoto = popupOpenImage.querySelector('.popup__photo');
const popupOpenImageTitle = popupOpenImage.querySelector('.popup__title_form_image');

// темплейт
const templateCard = document.querySelector('#template-card').content;
const cardGallery = document.querySelector('.cards-gallery');

// конфиг валидации
const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
};

//валидация форм
const popupEditProfileValidation = new FormValidator(formValidationConfig, formEditProfile);
const popupAddCardValidation = new FormValidator(formValidationConfig, formAddCard);

//открытие попапа редактирования профиля и сохранение введенных значений в профиль
const openPopupEditProfile = function () {
  authorNameInput.value = profileName.textContent;
  authorJobInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
}

// функция для слушателя событий формы попапа редактирования профиля
function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = authorNameInput.value;
  profileDescription.textContent = authorJobInput.value;
  closePopup(popupEditProfile);
}

// присваивание введеных значений для попапа с открытой картинкой
function saveNewValues(link, name) {
  popupOpenImagePhoto.src = link;
  popupOpenImagePhoto.alt = name;
  popupOpenImageTitle.textContent = name;
  openPopup(popupOpenImage);
}

//функция создания  нового экземпляра карточки
function createNewCard(item) {
  const card = new Card(item, templateCard, saveNewValues);
  cardGallery.prepend(card.createCard());
}

// функция закрытия попапа при нажатии на оверлей
const clickOnOverlay = function (event) {
  const target = event.target;
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}

// функция закрытия попапа при нажатии на эскейп
function closeByEscape(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', clickOnOverlay);
  document.addEventListener('keydown', closeByEscape);
}

// функция закрытия попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', clickOnOverlay);
  document.removeEventListener('keydown', closeByEscape);
}

// функция сохранения значений новой карточки в объекте
const addNewObject = function (event) {
  event.preventDefault();
  const card = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  }
  closePopup(popupAddCard);
  createNewCard(card);
  formAddCard.reset();
}

// функция закрытия попапа с событием эвент
popupCloseButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    closePopup(event.target.closest('.popup'))
  })
});

// функция создания карточек из каждого объекта массива
initialCards.forEach(function (card) {
  createNewCard(card);
});

// слушатель событий для кнопки попапа редактирования профиля
popupOpenButtonEdit.addEventListener('click', (event) => {
  openPopupEditProfile(event)
  popupEditProfileValidation.enableFormValidation();
});

// слушатель событий для формы попапа редактирования профиля
formEditProfile.addEventListener('submit', handleFormSubmit);

// слушатели событий для кнопки buttonAdd попапа добавления карточек
popupOpenButtonAdd.addEventListener('click', function () {
  openPopup(popupAddCard);
  popupAddCardValidation.enableFormValidation();
})

// слушатель событий для формы попапа добавления карточек
popupAddCard.addEventListener('submit', addNewObject);



