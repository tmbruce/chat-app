import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-react-native-language-detector';

const resources = {
  en: {
    translation: {
      messages: 'Messages!!!',
    },
  },
  es: {
    translation: {
      messages: 'Mensajes',
    },
  },
  zn: {
    translation: {
      messages: '消息',
    },
  },
  fil: {
    translation: {
      messages: 'Mga Mensahe',
    },
  },
  vi: {
    translation: {
      messages: 'Tin nhắn',
    },
  },
  ar: {
    translation: {
      messages: 'رسائل',
    },
  },
  fr: {
    translation: {
      messages: 'Messages',
    },
  },
  ko: {
    translation: {
      messages: '메시지',
    },
  },
  ru: {
    translation: {
      messages: 'Сообщения',
    },
  },
  de: {
    translation: {
      messages: 'Nachrichten',
    },
  },
};

i18n
  .use(LanguageDetector) // Detects language from the device
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
