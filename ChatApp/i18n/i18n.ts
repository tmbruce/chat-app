import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-react-native-language-detector';

const resources = {
  en: {
    translation: {
      messages: 'Messages',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido a React',
    },
  },
};

i18n
  .use(LanguageDetector) // Detects language from the device
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
