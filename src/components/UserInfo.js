export class UserInfo {
  constructor({ nameSelector, infoSelector, avatarSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userInfo = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
    };
  }

  getUserId() {
    return this._userId;
  }

  setUserInfo(data) {
    this._userId = data._id;
    this._userName.textContent = data.name ? data.name : "";
    this._userInfo.textContent = data.about ? data.about : "";
    this._avatar.src = data.avatar ? data.avatar : "";
  }
}
