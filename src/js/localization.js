import moment from 'moment';
import translations from '../lang/translations';

const newDate = new Date();

const locales = ["ru", "en"];
const defaultLocale = "en";
const urlParams = new URLSearchParams(window.location.search);
const localeFromQuery = urlParams.get('lng');


export function setLocaleOnLoading() {
    return locales.includes(localeFromQuery) ? localeFromQuery : getLocaleFromBrowser();
}

const getLocaleFromBrowser = () => {
    let locale = window.navigator.language || window.navigator.userLanguage;
    return locales.filter((e) => locale.includes(e))[0] || defaultLocale;
};

export function translatePage(locale) {
    document.querySelectorAll("[data-i18n-key]").forEach((element) => {
        const key = element.getAttribute("data-i18n-key");
        const translation = translations[locale][key];
        element.innerText = translation});
    formatDate(locale);
}

function formatDate(locale){
    moment.locale(locale);
    document.querySelector('.date').innerHTML = moment(newDate).format('dddd, DD MMMM, YYYY ');   
}

