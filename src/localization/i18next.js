import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

// the translations
const resources = {
  en
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false // not needed in react
    },
    react: {
      wait: true
    }
  });

export default i18n;
