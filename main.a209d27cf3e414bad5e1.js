(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,a,u){var c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=this._data.name,this._link=this._data.link,this._templateSelector=n,this._getId=i,this._handleDelete=o,this._cardElement=this._templateSelector.querySelector(".card"),this._handleCardClick=r,this._likeCardApi=a,this._dislikeCardApi=u,this._isLiked=0!==e.likes.length&&e.likes.find((function(t){return t._id===c._getId()}))}var n,r;return n=t,(r=[{key:"createCard",value:function(){return this._cloneCard=this._cardElement.cloneNode(!0),this._likesCount=this._cloneCard.querySelector(".card__like-counter"),this.getLikesCount(this._data),this._cloneImageCard=this._cloneCard.querySelector(".card__image"),this._cloneImageCard.src=this._data.link,this._cloneImageCard.alt=this._data.name,this._imageTitle=this._cloneCard.querySelector(".card__title"),this._imageTitle.textContent=this._data.name,this._deleteButton=this._cloneCard.querySelector(".card__trash"),this._cardButtonLike=this._cloneCard.querySelector(".card__button-like"),this._isLiked&&this._cardButtonLike.classList.add("card__button-like_active"),this._isOwner(this._data),this._setEventListeners(),this._cloneCard}},{key:"_isOwner",value:function(t){t.owner._id!==this._getId()&&this._deleteButton.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButton.addEventListener("click",(function(){t._handleDelete(t._data,t._deleteCard.bind(t))})),this._cardButtonLike.addEventListener("click",(function(){t._toggleLikeApi()})),this._cloneImageCard.addEventListener("click",(function(){t._handleCardClick(t._data.link,t._data.name)}))}},{key:"getLikesCount",value:function(t){this._likesCount.textContent=t.likes.length}},{key:"_deleteCard",value:function(){this._cardElement.remove(),this._cloneCard.remove(),this._cardElement=null}},{key:"toggleLike",value:function(t){var e=this;t.likes.some((function(t){return t._id===e._getId()}))?this._likeCard():this._dislikeCard()}},{key:"_dislikeCard",value:function(){this._cardButtonLike.classList.remove("card__button-like_active")}},{key:"_likeCard",value:function(){this._cardButtonLike.classList.add("card__button-like_active")}},{key:"_toggleLikeApi",value:function(){this._cardButtonLike.classList.contains("card__button-like_active")?this._dislikeCardApi(this._data._id):this._likeCardApi(this._data._id)}},{key:"_handleImageClick",value:function(){this._handleCardClick(this._data.link,this._data.name)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._buttonSubmit=this._form.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_disableSubmit",value:function(t){t.preventDefault()}},{key:"enableFormValidation",value:function(){var t=this;this._addInputListeners(),this._form.addEventListener("input",(function(){t.toggleButtonState()})),this.toggleButtonState()}},{key:"_addInputListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(n){t._handleFormInput(e)}))}))}},{key:"_handleFormInput",value:function(t){this._input=t,this._inputId=this._input.id,this._spanErrorClass=document.querySelector("#".concat(this._inputId,"-error")),this._input.validity.valid?(this._input.classList.remove(this._config.inputErrorClass),this._spanErrorClass.textContent=""):(this._spanErrorClass.textContent=this._input.validationMessage,this._input.classList.add(this._config.inputErrorClass))}},{key:"toggleButtonState",value:function(){this._isFormValid=this._form.checkValidity(),this._buttonSubmit.disabled=!this._isFormValid,this._buttonSubmit.classList.toggle(this._config.inactiveButtonClass,!this._isFormValid)}},{key:"resetValidation",value:function(){var t=this;this.toggleButtonState(),this._inputList.forEach((function(e){t._handleFormInput(e)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),console.log("fafssa")}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__button-close")&&t.close()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}function v(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(n);if(r){var o=_(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return y(t)}(this,t)});function i(t){var e,n,r,a,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=y(n=o.call(this,t)),u=function(t,r){n._popupOpenImagePhoto.src=t,n._popupOpenImagePhoto.alt=r,n._popupOpenImageTitle.textContent=r,h((e=y(n),_(i.prototype)),"open",e).call(e)},(a=v(a="open"))in r?Object.defineProperty(r,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[a]=u,n._popupOpenImagePhoto=n._popup.querySelector(".popup__photo"),n._popupOpenImageTitle=n._popup.querySelector(".popup__title_form_image"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(f);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=w(r);if(o){var n=w(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._btn=n._form.querySelector(".popup__button"),n._btnText=n._btn.textContent,n._inputList=n._form.querySelectorAll(".popup__input"),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())})),S(w(a.prototype),"setEventListeners",this).call(this)}},{key:"showLoading",value:function(t){this._btn.textContent=t?"Сохранение...":this._btnText}},{key:"close",value:function(){this._form.reset(),S(w(a.prototype),"close",this).call(this)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var j=function(){function t(e){var n=e.nameSelector,r=e.infoSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent}}},{key:"getUserId",value:function(){return this._userId}},{key:"setUserInfo",value:function(t){this._userId=t._id,this._userName.textContent=t.name?t.name:"",this._userInfo.textContent=t.about?t.about:"",this._avatar.src=t.avatar?t.avatar:""}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Произошла ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers})}},{key:"getAllCards",value:function(){return this._request("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers})}},{key:"setUserInfo",value:function(t){return this._request("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})})}},{key:"addNewCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"likeCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"dislikeCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"setAvatar",value:function(t){return this._request("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.link})})}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=U(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function U(t){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},U(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=U(r);if(o){var n=U(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._deleteCardApi=e,n._form=document.querySelector(".popup__form_type_confirm"),n}return e=a,(n=[{key:"setData",value:function(t,e){this._data=t,this._deleteCard=e}},{key:"getData",value:function(){return{data:this._data,deleteCard:this._deleteCard}}},{key:"setEventListeners",value:function(){var t=this;R(U(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._deleteCardApi()}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var D=document.querySelector(".profile__photo"),F=document.querySelector(".popup__input_type_name-edit"),V=document.querySelector(".popup__input_type_description-edit"),N=document.querySelector(".profile__edit-button"),J=document.querySelector(".popup__form_edit"),G=document.querySelector(".popup__form_add"),H=document.querySelector(".profile__add-button"),M=document.querySelector(".popup__form_type_update"),z=document.querySelector("#template-card").content,$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"},K=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{Authorization:"2ade9657-6571-4ddf-bd29-0da603d3f330","Content-Type":"application/json"}}),Q=new j({nameSelector:".profile__name",infoSelector:".profile__description",avatarSelector:".profile__avatar"}),W=new c({renderer:function(t){var e=ot(t);W.addItem(e)}},".cards-gallery");Promise.all([K.getUserInfo(),K.getAllCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q.setUserInfo(o),W.renderItems(i.reverse())})).catch((function(t){console.log(t)}));var X=new i($,J);X.enableFormValidation();var Y=new i($,G);Y.enableFormValidation();var Z=new i($,M);Z.enableFormValidation();var tt=new b(".popup_form_image");tt.setEventListeners();var et=new C(".popup_edit-profile",(function(t){et.showLoading(!0),K.setUserInfo(t).then((function(t){Q.setUserInfo(t),et.close()})).catch((function(t){console.log(t)})).finally((function(){et.showLoading(!1)}))})),nt=new C(".popup_add-card",(function(t){nt.showLoading(!0),K.addNewCard(t).then((function(t){var e=ot(t);W.addItem(e),nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.showLoading(!1)}))})),rt=new A(".popup_delete-card",(function(){var t=rt.getData(),e=t.data,n=t.deleteCard;K.deleteCard(e._id).then((function(){n(),rt.close()})).catch((function(t){console.log(t)}))}));function ot(t){var e=new n(t,z,ut,ct,it,(function(t){K.likeCard(t).then((function(t){e.getLikesCount(t),e.toggleLike(t)})).catch((function(t){console.log(t)}))}),(function(t){K.dislikeCard(t).then((function(t){e.getLikesCount(t),e.toggleLike(t)})).catch((function(t){console.log(t)}))}));return e.createCard()}function it(){return Q.getUserId()}var at=new C(".popup_update-avatar",(function(t){at.showLoading(!0),K.setAvatar(t).then((function(t){Q.setUserInfo(t),at.close()})).catch((function(t){console.log(t)})).finally((function(){at.showLoading(!1)}))}));function ut(t,e){tt.open(t,e)}function ct(t,e){rt.open(),rt.setData(t,e)}N.addEventListener("click",(function(){F.value=Q.getUserInfo().name,V.value=Q.getUserInfo().about,et.open(),X.toggleButtonState()})),H.addEventListener("click",(function(){nt.open(),Y.toggleButtonState()})),D.addEventListener("click",(function(){at.open(),Z.toggleButtonState()})),et.setEventListeners(),nt.setEventListeners(),rt.setEventListeners(),at.setEventListeners()})();