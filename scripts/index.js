//попап редактирования профиля
const popupEdit = document.querySelector('.popup_form_edit');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popupOpenButtonEdit = document.querySelector('.profile__edit-button');
let formEdit = document.forms.formEdit;
let inputNameAuthor = document.querySelector('.popup__info_type_name-edit');
let inputJobAuthor = document.querySelector('.popup__info_type_description-edit');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

// попап добавления карточки
const popupAdd = document.querySelector('.popup_form_add');
const popupOpenButtonAdd = document.querySelector('.profile__add-button');
const inputCardName = document.querySelector('.popup__info_type_name-add');
const inputCardLink = document.querySelector('.popup__info_type_link-add');
const formAdd = document.forms.formAdd;

// попап с открытой картинкой
const popupImage = document.querySelector('.popup_form_image');
const popupImagePhoto = popupImage.querySelector('.popup__photo');
const popupImageTitle = popupImage.querySelector('.popup__title_form_image');

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
const openPopupEdit = function () {
  inputNameAuthor.value = profileName.textContent;
  inputJobAuthor.value = profileDescription.textContent;
  openPopup(popupEdit);
}

// функция для слушателя событий формы попапа редактирования профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputNameAuthor.value;
  profileDescription.textContent = inputJobAuthor.value;
  closePopup(popupEdit);
}

// функция открытия попапа
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}

// функция сохранения значений новой карточки в объекте
const addNewObject = function (evt) {
  evt.preventDefault();
  const card = {
    name: inputCardName.value,
    link: inputCardLink.value
  }
  createCard(card);
  closePopup(popupAdd);
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
  cardGallery.append(cloneCard);
  // кнопка удаления карточки
  const deleteButton = cloneCard.querySelector('.card__trash');
  deleteButton.addEventListener('click', function () {
    cloneCard.remove();
  });
  // присваивание значений введеных значений для попапа с открытой картинкой
  cloneImageCard.addEventListener('click', function () {
    popupImagePhoto.src = cloneImageCard.src;
    popupImagePhoto.alt = cloneImageCard.alt;
    popupImageTitle.textContent = imageTitle.textContent;
    openPopup(popupImage);
  });
  // лайк карточки
  const cardButtonLike = cloneCard.querySelector('.card__button-like');
  cardButtonLike.addEventListener('click', function () {
    cardButtonLike.classList.toggle('card__button-like_active');
  });
  // добавление новой карточки в начало
  cardGallery.prepend(cloneCard);
}

// функция создания карточек из каждого объекта массива
initialCards.forEach(function (card) {
  createCard(card);
});

// слушатель событий для кнопки попапа редактирования профиля
popupOpenButtonEdit.addEventListener('click', openPopupEdit);

// слушатель событий для формы попапа редактирования профиля
formEdit.addEventListener('submit', handleFormSubmit);

// слушатель событий для кнопки buttonAdd попапа добавления карточек
popupOpenButtonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
})

// слушатель событий для формы попапа добавления карточек
formAdd.addEventListener('submit', addNewObject);


