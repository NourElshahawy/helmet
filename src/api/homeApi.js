import api from "./axios";

// بيرجع { nav, hero, footer } — عدّل الـ endpoint حسب الـ backend عندك

// بيعمل ايه: فيه function واحدة getHomeContent() بتنادي endpoint معيّن وترجع الداتا.
// ليه: فصلت "طلب الداتا" عن "استخدام الداتا".الـ component(Navbar / Hero / Footer) متعرفش هي جاية منين ولا إزاي — هو بس بيستقبل props.ده بيخليك لو غيّرت شكل الـ API أو الـ endpoint، تعدّل في الملف ده بس، مش هتلمس أي component.

// export const getHomeContent = async () => {
//     const { data } = await api.get("/home-content");
//     return data;
// };



// ==== بيانات وهمية مؤقتة — هتتشال لما الـ API يجهز ====
const MOCK_HOME_CONTENT = {
    nav: {
        logo: "/assets/logo.png",
        menuIcon: "/assets/menu-icon.svg",
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
    hero: {
        title: "صُمم ليكون مختلفاً",
        description:
            "في عالم أصبحت فيه الأجهزة الذكية جزءًا من حياتنا، جاءت HELMET لتقدم حماية حقيقية تواكب قيمة أجهزتك.",
        ctaLabel: "استكشف منتجاتنا",
        ctaHref: "/products",
        images: [
            { src: "/assets/hero-1.png", alt: "Hero Image 1" },
            { src: "/assets/hero-2.png", alt: "Hero Image 2" },
        ],
        warrantyBadge: { src: "/assets/warranty-badge.png", alt: "ختم الضمان" },
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

// عدّلي القيمة دي لـ true وقت ما الـ API يبقى شغال فعليًا
const USE_MOCK_DATA = true;

export const getHomeContent = async () => {
    if (USE_MOCK_DATA) {
        // بنعمل تأخير بسيط عشان نحاكي شكل الـ loading الحقيقي
        await new Promise((resolve) => setTimeout(resolve, 300));
        return MOCK_HOME_CONTENT;
    }

    const { data } = await api.get("/home-content");
    return data;
};