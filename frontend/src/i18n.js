import i18n from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// import home from './Components/locales/ps/home.json'

const resources = {
  en: {
    home: require("./Components/locales/en/home.json"),
    events: require("./Components/locales/en/events.json"),
    contact: require("./Components/locales/en/contact.json"),
  },
  ps: {
    home: require("./Components/locales/ps/home.json"),
    events: require("./Components/locales/ps/events.json"),
    contact: require("./Components/locales/ps/contact.json"),
  },
  fa: {
    home: require("./Components/locales/fa/home.json"),
    events: require("./Components/locales/fa/events.json"),
    contact: require("./Components/locales/fa/contact.json"),
  },
};

i18n
  .use(languagedetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    ns: ["home", "events", "contact"],
    lng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
