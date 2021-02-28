const defaultOptions = {
    mode: 'alert',
    modeClassList: {
        alert: 'modal_alert',
        promt: 'modal_promt',
        confirm: 'modal_confirm',
    },
    classList: {
        open: 'modal_active'
    },
    isShowNow: false
}

function addHandler(nameHandler, handler, target) {
    target.addEventListener(nameHandler, handler);
}

function closeModal(e) {
    console.log(this, e.target, e.currentTarget)
    if (e.target === e.currentTarget || e.target.classList.contains('modal__close') || (this.options.mode === 'alert' && e.target.classList.contains('modal__btn-ok')) || e.target.classList.contains('modal__btn-cansel')) {
        this.hidden();
    } else if (this.options.mode !== 'alert' && e.target.classList.contains('modal__btn-ok')) {

    }

}

function BeetRootModal(option) {
    this.options = {
        ...defaultOptions,
        ...option,
    }

    this.inite = function () {
        const option = this.options;
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
    }

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
    }

    this.setMode = function (mode) {
        this.options.mode = mode;
    }

    this.inite();
}

const win = new BeetRootModal({
    wrapper: document.querySelector('.modal'),
    mode: 'prom',
    title: 'My first modal window',
    text: 'Modal window text',
    isShowNow: true
});

console.log(win);
win.setTitle('sdfdfdasfdasf');
win.setText('sdfdfdasfdasf');
