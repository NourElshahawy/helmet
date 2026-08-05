export const ENTRANCE_DURATION = 1.4;
export const ENTRANCE_EASE = "expo.out";
export const ENTRANCE_STAGGER = 0.12;

// converge: الحركة اللي بتقرب الصور من بعض بعد ما تنفجر بعيد الأول
export const CONVERGE_DURATION = 1.1;
export const CONVERGE_EASE = "power3.inOut";
export const CONVERGE_DELAY = 0.15; // مسافة زمنية بعد ما الـ entrance يخلص قبل ما التقارب يبدأ

export const HERO_LAYERS_CONFIG = [
    
    {
        // الموبايل الثاني (يمين)
        explodeX: 230,    
        restX: 30,        
        explodeY: 0,
        rotateXStart: 10,
        rotateZStart: 4,
        floatAmplitude: 5,
        floatDuration: 3.8,
        parallaxFactor: 0.5,
    },
    {
        // الموبايل الأول (شمال)
        explodeX: -230,   
        restX: -30,        
        explodeY: 0,
        rotateXStart: 10,
        rotateZStart: -4,
        floatAmplitude: 5,
        floatDuration: 3.4,
        parallaxFactor: 0.5,
    },
];

export const SCALE_START = 0.9;
export const SCALE_END = 1;
export const OPACITY_START = 0;
export const OPACITY_END = 1;

export const SCROLL_TRIGGER_START = "top 75%";
export const SCROLL_TRIGGER_END = "bottom 20%";
export const SCROLL_TRIGGER_TOGGLE_ACTIONS = "restart none none reset";

export const PARALLAX_MAX_OFFSET = 15;
export const PARALLAX_QUICKTO_DURATION = 0.6;
export const PARALLAX_QUICKTO_EASE = "power3.out";


export const STAMP_DELAY = 0.3; // فاصل بعد ما التقارب يخلص قبل ما الختم يظهر
export const STAMP_DURATION = 0.6;
export const STAMP_EASE = "back.out(2.5)"; // إيزنج فيه ارتداد، بيدي إحساس "دمغة" حقيقية
export const STAMP_ROTATE_START = -25;
export const STAMP_ROTATE_END = -12;
export const STAMP_SCALE_START = 0.3;