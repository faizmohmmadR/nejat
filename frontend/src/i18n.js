import i18n from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import home from "./Components/locales/en/home.json";
// import home from './Components/locales/ps/home.json'

const resources = {
  en: {
    home: require("./Components/locales/en/home.json"),
  },
  ps: {
    home: require("./Components/locales/ps/home.json"),
  },
  fa: {
    home: require("./Components/locales/fa/home.json"),
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
    ns: ["home"],
    lng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
