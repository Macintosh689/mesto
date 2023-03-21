export class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userInfo = document.querySelector(infoSelector);
  }
  getUserInfo() {
    return {
      name: this._userName.textContent,
      job: this._userInfo.textContent
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name ? data.name : "";
    this._userInfo.textContent = data.job ? data.job : "";
  }
}
