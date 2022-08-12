import '../scss/style.scss';
import { startTimer } from './timer';
import { setLocaleOnLoading, translatePage } from './localization';
import { setCheckSvgImages } from './utils';

const locale = setLocaleOnLoading();


document.addEventListener("DOMContentLoaded", () => {
    translatePage(locale);
    setCheckSvgImages();
});


window.onload = function () {
    alert('Добро пожаловать!');
    const timeCounter = 10;
    startTimer(timeCounter, locale);
};
