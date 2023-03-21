export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = document.querySelector(containerSelector);
  }
  addItem(item) {
    this._selector.prepend(item);
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

}

