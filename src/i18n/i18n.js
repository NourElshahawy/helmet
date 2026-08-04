import i18n from "i18next"; // جبنا المكتبة
import { initReactI18next } from "react-i18next"; // وصلنا المكتبة بريأكت

import en from "../locales/en.json"; // جاب ملف الإنجليزى
import ar from "../locales/ar.json"; // جاب ملف العربى

const savedLang = localStorage.getItem("lang") || "ar"; // en لو المستخدم اختار لغة قبل كده هيستخدمها ............ لو أول مرة يدخل هيبدأ بـ 

i18n
    .use(initReactI18next)
    .init({
        resources: { // دى كل اللغات الموجودة
            en: {
                translation: en,
            },
            ar: {
                translation: ar,
            },
        },

        lng: savedLang, // دى اللغة الحالية

        fallbackLng: "ar", // resources لو اللغة الحالية مش موجودة فى هيستخدم اللغة دى

        interpolation: {
            escapeValue: false, // دى خاصة بـ React، وبنسيبها كده
        },
    });

export default i18n;

//! ============== أستخدمها إزاى ؟ ============== //
// import { useTranslation } from "react-i18next"; بعمل
// const { t } = useTranslation(); وبعدين جوا الكومبونينت


// import { useTranslation } from "react-i18next";

// export default function Navbar() {
//     const { t } = useTranslation();
//     return (
//         <>
//             <h1>{t("home")}</h1>
//         </>
//     );
// }


//! ================== (Navbar) زرار تغيير اللغة ================== //
// ********* الفانكشن دى هتغير اللغة من عربى لإنجليزى والعكس ********* //
// function changeLanguage() {
//     const lang = i18n.language === "ar" ? "en" : "ar";
//     i18n.changeLanguage(lang);
//     localStorage.setItem("lang", lang);
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
// }

// ********* زرار تغيير اللغة ********* //
// <button onClick={() => { changeLanguage() }}
//     className="">
//     <i className="fa-solid fa-globe"></i>
//     <span>{i18n.language === "ar" ? "En" : "Ar"}</span>
// </button>



