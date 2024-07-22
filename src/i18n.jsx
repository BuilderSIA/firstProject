import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzTr from '../public/locales/uzb.json';
import ruTr from '../public/locales/rus.json';
import enTr from '../public/locales/eng.json';

const language = localStorage.getItem("i18nextLng") || 'uz';


i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng:'uz',
    lang: language,
    debug:true,
    resources:{
        uz:{translation:uzTr},
        en:{translation:enTr},
        ru:{translation:ruTr}
    }
})

export default i18n