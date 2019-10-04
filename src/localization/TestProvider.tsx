import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

// the translations
const resources = {
  en
};

// Test i18n instance
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: false
  }
});

/**
 * A Provider component that can be used when i18n functionality needs to be tested
 */
const I18nTestProvider = ({ children }: { children: React.ReactChild }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default I18nTestProvider;
