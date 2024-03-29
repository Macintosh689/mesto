export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem(item) {
    this._container.prepend(item);
  }
  renderItems(data) {
    data.forEach((item) => {
      this._renderer(item);
    });
  }
}
