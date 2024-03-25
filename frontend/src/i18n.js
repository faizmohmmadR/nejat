import i18n from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const resources = {
  en: {
    home: require("./Components/locales/en/home.json"),
    events: require("./Components/locales/en/events.json"),
    nav: require("./Components/locales/en/nav.json"),
  },
  ps: {
    home: require("./Components/locales/ps/home.json"),
    events: require("./Components/locales/ps/events.json"),
    nav: require("./Components/locales/ps/nav.json"),
  },
  fa: {
    home: require("./Components/locales/fa/home.json"),
    events: require("./Components/locales/fa/events.json"),
    nav: require("./Components/locales/fa/nav.json"),
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
    ns: ["home", "events", "nav"],
    lng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
