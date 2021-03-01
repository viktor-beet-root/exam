"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  mode: 'alert',
  modeClassList: {
    alert: 'modal_alert',
    promt: 'modal_promt',
    confirm: 'modal_confirm'
  },
  classList: {
    open: 'modal_active'
  },
  isShowNow: false
};

function addHandler(nameHandler, handler, target) {
  target.addEventListener(nameHandler, handler);
}

function closeModal(e) {
  console.log(this, e.target, e.currentTarget);

  if (e.target === e.currentTarget || e.target.classList.contains('modal__close') || this.options.mode === 'alert' && e.target.classList.contains('modal__btn-ok') || e.target.classList.contains('modal__btn-cansel')) {
    this.hidden();
  } else if (this.options.mode !== 'alert' && e.target.classList.contains('modal__btn-ok')) {}
}

function BeetRootModal(option) {
  this.options = _objectSpread(_objectSpread({}, defaultOptions), option);

  this.inite = function () {
    var option = this.options;
    this.title = option.wrapper.querySelector('.modal__title');
    this.text = option.wrapper.querySelector('.modal__text');
    this.input = option.wrapper.querySelector('.modal__promt');
    this.ok = option.wrapper.querySelector('.modal__btn-ok');
    this.cansel = option.wrapper.querySelector('.modal__btn-cansel');
    this.close = option.wrapper.querySelector('.modal__close');
    this.setTitle(option.title);
    this.setText(option.text);
    addHandler('click', closeModal.bind(this), this.options.wrapper);
    this.setMode();

    if (option.isShowNow) {
      this.show();
    }
  };

  this.setTitle = function (title) {
    this.title.textContent = title;
  };

  this.setText = function (text) {
    this.text.textContent = text;
  };

  this.setMode = function () {
    this.options.wrapper.classList.add(this.options.modeClassList[this.options.mode]);
  };

  this.show = function () {
    this.options.wrapper.classList.add(this.options.classList.open);
  };

  this.hidden = function () {
    this.options.wrapper.classList.remove(this.options.classList.open);
  };

  this.getMode = function () {
    return this.options.mode;
  };

  this.setMode = function (mode) {
    this.options.mode = mode;
  };

  this.inite();
}

var win = new BeetRootModal({
  wrapper: document.querySelector('.modal'),
  mode: 'prom',
  title: 'My first modal window',
  text: 'Modal window text',
  isShowNow: true
});
console.log(win);
win.setTitle('sdfdfdasfdasf');
win.setText('sdfdfdasfdasf');