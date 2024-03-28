import i18n from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const resources = {
  en: {
    home: require("./Components/locales/en/home.json"),
    events: require("./Components/locales/en/events.json"),
    contact: require("./Components/locales/en/contact.json"),
    nav: require("./Components/locales/en/nav.json"),
    service: require("./Components/locales/en/service.json"),
    news: require("./Components/locales/en/news.json"),
    login_Register: require("./Components/locales/en/login&register.json"),
    footer: require("./Components/locales/en/footer.json"),
  },
  ps: {
    home: require("./Components/locales/ps/home.json"),
    events: require("./Components/locales/ps/events.json"),
    contact: require("./Components/locales/ps/contact.json"),
    nav: require("./Components/locales/ps/nav.json"),
    service: require("./Components/locales/ps/service.json"),
    news: require("./Components/locales/ps/news.json"),
    login_Register: require("./Components/locales/ps/login&register.json"),
    footer: require("./Components/locales/ps/footer.json"),
  },
  fa: {
    home: require("./Components/locales/fa/home.json"),
    events: require("./Components/locales/fa/events.json"),
    contact: require("./Components/locales/fa/contact.json"),
    nav: require("./Components/locales/fa/nav.json"),
    service: require("./Components/locales/fa/service.json"),
    news: require("./Components/locales/fa/news.json"),
    login_Register: require("./Components/locales/fa/login&register.json"),
    footer: require("./Components/locales/fa/footer.json"),
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
    ns: [
      "home",
      "events",
      "service",
      "news",
      "login_Register",
      "footer",
      "contact",
    ],
    lng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
