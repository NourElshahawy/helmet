import api from "./axios";

/* ==================== Header (Nav + Footer logos) ==================== */

export const getHeaderContent = async () => {
    const { data } = await api.get("/home/header", {
        headers: { "Accept-Language": "ar" },
    });
    return data.data; // { site_name, logo, favicon, footer_logo }
};




/* ==================== Hero ==================== */
export const getHeroContent = async () => {
    const { data } = await api.get("/home/hero", {
        headers: { "Accept-Language": "ar" },
    });
    const hero = data.data;

    return {
        title: hero.title,
        description: hero.description,
        ctaLabel: "استكشف منتجاتنا", // مفيش في الـ API لسه، قيمة ثابتة مؤقتًا
        ctaHref: "/products",
        images: [
            { src: hero.image_one, alt: "Phone Case" },
            { src: hero.image_two, alt: "iPhone" },
            { src: hero.image_three, alt: "Accessory" },
        ],
        warrantyBadge: { src: "/assets/warranty-stamp.png", alt: "ختم الضمان" },
    };
};






/* ==================== Home Content (Products + Warranty لسه mock) ==================== */
const MOCK_HOME_CONTENT = {
    nav: {
        langLabel: "AR",
        contactLabel: "تواصل معنا",
        contactHref: "/contact",
        links: [
            { label: "الرئيسية", href: "/" },
            { label: "المنتجات", href: "/products" },
            { label: "من نحن", href: "/about" },
            { label: "أين تجدنا", href: "/stores" },
            { label: "الضمان", href: "/warranty" },
            { label: "شروط الضمان", href: "/warranty-terms" },
        ],
    },
    footer: {
        links: [
            { label: "الرئيسية", href: "/" },
            { label: "المنتجات", href: "/products" },
            { label: "من نحن", href: "/about" },
            { label: "أين تجدنا", href: "/stores" },
            { label: "الضمان", href: "/warranty" },
            { label: "شروط الضمان", href: "/warranty-terms" },
        ],
        copyright: "جميع الحقوق محفوظة لشركة HELMET",
        poweredByLabel: "Designed & Powered by",
        poweredByName: "Jadara",
        poweredByHref: "#",
    },
};

const USE_MOCK_DATA = true;

export const getHomeContent = async () => {
    if (USE_MOCK_DATA) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return MOCK_HOME_CONTENT;
    }
    const { data } = await api.get("/home-content");
    return data;
};