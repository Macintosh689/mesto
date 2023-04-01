import "./../pages/index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
// import { initialCards } from "../components/constants.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithDelete } from "../components/PopupWithDelete.js";

const EditAvatarButton = document.querySelector(".profile__photo");

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


const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    Authorization: "2ade9657-6571-4ddf-bd29-0da603d3f330",
    "Content-Type": "application/json",
  },
});

// экземпляр класса UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  infoSelector: ".profile__description",
  avatarSelector: ".profile__avatar",
});

// экземпляр класса Section
const section = new Section({ renderer: renderCard }, ".cards-gallery");

Promise.all([api.getUserInfo(), api.getAllCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    section.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(err);
  });

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
  popupWithFormEdit.showLoading(true);
  api
    .setUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupWithFormEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormEdit.showLoading(false);
    });
});

// попап добавления карточки
const popupWithFormAdd = new PopupWithForm(".popup_add-card", (data) => {
  popupWithFormAdd.showLoading(true);
  api
    .addNewCard(data)
    .then((res) => {
      const elem = createNewCard(res);
      section.addItem(elem);
      popupWithFormAdd.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormAdd.showLoading(false);
    });
});

// попап подтверждения удаления
const popupWithDelete = new PopupWithDelete(".popup_delete-card", () => {
  const { data, deleteCard } = popupWithDelete.getData();

  api
    .deleteCard(data._id)
    .then(() => {
      deleteCard();
      popupWithDelete.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

//функция создания  нового экземпляра карточки
function createNewCard(data) {
  const card = new Card(
    data,
    templateCard,
    handleCardClick,
    handleDelete,
    getId,
    (id) => {
      api
        .likeCard(id)
        .then((res) => {
          card.getLikesCount(res);
          card.toggleLike(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    (id) => {
      api
        .dislikeCard(id)
        .then((res) => {
          card.getLikesCount(res);
          card.toggleLike(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );

  return card.createCard();
}

function getId() {
  return userInfo.getUserId();
}

// попап изменения аватара
const popupWithAvatar = new PopupWithForm(".popup_update-avatar", (data) => {
  popupWithAvatar.showLoading(true);
  api
    .setAvatar(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupWithAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithAvatar.showLoading(false);
    });
});

// присваивание введеных значений для попапа с открытой картинкой
function handleCardClick(link, name) {
  popupWithImage.open(link, name);
}

function handleDelete(data, deleteCard) {
  popupWithDelete.open();
  popupWithDelete.setData(data, deleteCard);
}

// функция создания карточек из каждого объекта массива
function renderCard(cardData) {
  const newCard = createNewCard(cardData);
  section.addItem(newCard);
}

// слушатель событий для кнопки попапа редактирования профиля
popupOpenButtonEdit.addEventListener("click", () => {
  inputName.value = userInfo.getUserInfo().name;
  inputJob.value = userInfo.getUserInfo().about;
  popupWithFormEdit.open();
  popupEditProfileValidation.resetValidation();
});

// слушатели событий для кнопки buttonAdd попапа добавления карточек
popupOpenButtonAdd.addEventListener("click", function () {
  popupWithFormAdd.open();
  popupAddCardValidation.toggleButtonState();
});

EditAvatarButton.addEventListener("click", function () {
  popupWithAvatar.open();
});

// слушатель события изменения описания профиля
popupWithFormEdit.setEventListeners();

// слушатель события добавления карточки
popupWithFormAdd.setEventListeners();

popupWithDelete.setEventListeners();

popupWithAvatar.setEventListeners();
