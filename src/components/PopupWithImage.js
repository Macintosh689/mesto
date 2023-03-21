import  { Popup }  from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupOpenImagePhoto = this._popupSelector.querySelector('.popup__photo');
    this._popupOpenImageTitle = this._popupSelector.querySelector('.popup__title_form_image');
  }

  open = (link, name) => {
    this._popupOpenImagePhoto.src = link;
    this._popupOpenImagePhoto.alt = name;
    this._popupOpenImageTitle.textContent = name;
    super.open();
  }
}
