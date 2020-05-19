import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import frTranslation from './fr.json';
import enTranslation from './en.json';

const resources = {
    fr: {
        translation: frTranslation
    },
    en: {
        translation: enTranslation
    }
};

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources,
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
