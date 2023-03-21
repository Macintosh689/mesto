import "./../pages/index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { initialCards } from "../components/constants.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

// поля ввода имени и описания профиля
const inputName = document.querySelector(".popup__input_type_name-edit");
const inputJob = document.querySelector(".popup__input_type_description-edit");

// попап редактирования профиля
const popupOpenButtonEdit = document.querySelector(".profile__edit-button");
const formEditProfile = document.querySelector(".popup__form_edit");

// попап добавления карточки
const formAddCard = document.querySelector(".popup__form_add");
const popupOpenButtonAdd = document.querySelector(".profile__add-button");

// темплейт
const templateCard = document.querySelector("#template-card").content;

// конфиг валидации
const formValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
};

// экземпляр класса UserInfo
const userInfo = new UserInfo({ nameSelector: ".profile__name", infoSelector: ".profile__description" });

//валидация форм
const popupEditProfileValidation = new FormValidator(
  formValidationConfig,
  formEditProfile
);
popupEditProfileValidation.enableFormValidation();

const popupAddCardValidation = new FormValidator(
  formValidationConfig,
  formAddCard
);
popupAddCardValidation.enableFormValidation();

// экземпляр класса PopupWithImage
const popupWithImage = new PopupWithImage(".popup_form_image");
popupWithImage.setEventListeners();

// экземпляр класса PopupWithForm(для двух попапов)
// попап редактирования профиля
const popupWithFormEdit = new PopupWithForm(".popup_edit-profile", (data) => {
  userInfo.setUserInfo(data);
  popupWithFormEdit.close();
});

// попап добавления карточки
const popupWithFormAdd = new PopupWithForm(".popup_add-card", (data) => {
  const card = {
    link: data.link,
    name: data.name,
  };
  section.addItem(createNewCard(card));
  popupWithFormAdd.close();
});

// экземпляр класса Section
const section = new Section({ items: initialCards, renderer: renderCard }, ".cards-gallery");
section.renderItems();

//функция создания  нового экземпляра карточки
function createNewCard({ link, name }) {
  const card = new Card({ link, name }, templateCard, handleCardClick);
  const cardElement = card.createCard();
  return cardElement;
}

// присваивание введеных значений для попапа с открытой картинкой
function handleCardClick(link, name) {
  popupWithImage.open(link, name);
}

// функция создания карточек из каждого объекта массива
function renderCard(cardData) {
  const newCard = createNewCard(cardData);
  section.addItem(newCard);
}

// слушатель событий для кнопки попапа редактирования профиля
popupOpenButtonEdit.addEventListener("click", () => {
  inputName.value = userInfo.getUserInfo().name;
  inputJob.value = userInfo.getUserInfo().job;
  popupWithFormEdit.open();
  popupEditProfileValidation.resetValidation();
});

// слушатели событий для кнопки buttonAdd попапа добавления карточек
popupOpenButtonAdd.addEventListener("click", function () {
  popupWithFormAdd.open();
  popupAddCardValidation.toggleButtonState();
});

// слушатель события изменения описания профиля
popupWithFormEdit.setEventListeners();

// слушатель события добавления карточки
popupWithFormAdd.setEventListeners();
