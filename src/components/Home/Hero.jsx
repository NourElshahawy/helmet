import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../../styles/layout/home/hero.css";


import {
  ENTRANCE_DURATION,
  ENTRANCE_EASE,
  ENTRANCE_STAGGER,
  TEXT_STAGGER,
  TEXT_DURATION,
  TEXT_EASE,
  TEXT_Y_START,
  CONVERGE_DURATION,
  CONVERGE_EASE,
  CONVERGE_DELAY,
  HERO_LAYERS_CONFIG,
  SCALE_START,
  SCALE_END,
  OPACITY_START,
  OPACITY_END,
  SCROLL_TRIGGER_START,
  SCROLL_TRIGGER_END,
  SCROLL_TRIGGER_TOGGLE_ACTIONS,
  PARALLAX_MAX_OFFSET,
  PARALLAX_QUICKTO_DURATION,
  PARALLAX_QUICKTO_EASE,
  STAMP_DELAY,
  STAMP_DURATION,
  STAMP_EASE,
  STAMP_ROTATE_START,
  STAMP_ROTATE_END,
  STAMP_SCALE_START,
} from "./heroAnimation.constants";
import { ScrollTrigger } from "gsap/all";
import MainBtn from "../ui/MainBtn";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ hero }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const galleryRef = useRef(null);
  const stampRef = useRef(null);
  const layerRefs = useRef([]); // مصفوفة بكل عناصر الصور
  layerRefs.current = [];

  const addLayerRef = (el) => {
    if (el && !layerRefs.current.includes(el)) {
      layerRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    if (!hero?.images?.length) return;

    // gsap.context() بيجمع كل الأنيميشن والـ ScrollTrigger اللي بننشئها هنا
    // عشان نقدر ننضفها كلها بسطر واحد وقت الـ unmount
    const ctx = gsap.context(() => {
      const layers = layerRefs.current;
      const isMobile = window.innerWidth < 640;
      const distanceScale = isMobile ? 0.45 : 1;

      // ---------- 0) الحالة الابتدائية للنص ----------
      const textEls = [
        titleRef.current,
        descRef.current,
        ctaRef.current,
      ].filter(Boolean);
      gsap.set(textEls, { opacity: 0, y: TEXT_Y_START });

      // ---------- 1) الحالة الابتدائية للصور (متراكبة فوق بعض) ----------
      layers.forEach((layer, i) => {
        const config = HERO_LAYERS_CONFIG[i] ?? HERO_LAYERS_CONFIG[0];
        gsap.set(layer, {
          opacity: OPACITY_START,
          scale: SCALE_START,
          x: 0,
          y: 0,
          rotateX: config.rotateXStart,
          rotateZ: config.rotateZStart,
          transformPerspective: 800,
        });
      });

      // الختم يبدأ صغير جدًا، مايل، وشفاف
      if (stampRef.current) {
        gsap.set(stampRef.current, {
          opacity: 0,
          scale: STAMP_SCALE_START,
          rotate: STAMP_ROTATE_START,
        });
      }

      // ---------- 2) Timeline رئيسي: Text ثم Explode ثم Converge ثم Stamp ----------
      const entranceTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: SCROLL_TRIGGER_START,
          end: SCROLL_TRIGGER_END,
          toggleActions: SCROLL_TRIGGER_TOGGLE_ACTIONS,
        },
        onComplete: startFloatingLoop,
      });

      // مرحلة 0: دخول النص (العنوان + الوصف + الزرار)
      entranceTl.to(
        textEls,
        {
          opacity: 1,
          y: 0,
          duration: TEXT_DURATION,
          ease: TEXT_EASE,
          stagger: TEXT_STAGGER,
        },
        0,
      );

      // مرحلة 1: انفجار بعيد عن المنتصف
      layers.forEach((layer, i) => {
        const config = HERO_LAYERS_CONFIG[i] ?? HERO_LAYERS_CONFIG[0];
        entranceTl.to(
          layer,
          {
            opacity: OPACITY_END,
            scale: SCALE_END,
            x: config.explodeX * distanceScale,
            y: config.explodeY * distanceScale,
            rotateX: 0,
            rotateZ: 0,
            duration: ENTRANCE_DURATION,
            ease: ENTRANCE_EASE,
          },
          i * ENTRANCE_STAGGER,
        );
      });

      // مرحلة 2: تقارب ناعم لموقعهم النهائي
      layers.forEach((layer, i) => {
        const config = HERO_LAYERS_CONFIG[i] ?? HERO_LAYERS_CONFIG[0];
        entranceTl.to(
          layer,
          {
            x: config.restX * distanceScale,
            duration: CONVERGE_DURATION,
            ease: CONVERGE_EASE,
          },
          `>-${CONVERGE_DELAY}`,
        );
      });

      // مرحلة 3: الختم يدمغ بعد ما الموبايلين يستقروا
      if (stampRef.current) {
        entranceTl.to(
          stampRef.current,
          {
            opacity: 1,
            scale: 1,
            rotate: STAMP_ROTATE_END,
            duration: STAMP_DURATION,
            ease: STAMP_EASE,
          },
          `>+${STAMP_DELAY}`,
        );
      }

      // ---------- 3) Floating loop مستمر لكل طبقة، بسرعة مختلفة ----------
      const floatTweens = [];

      function startFloatingLoop() {
        layers.forEach((layer, i) => {
          const config = HERO_LAYERS_CONFIG[i] ?? HERO_LAYERS_CONFIG[0];
          const tween = gsap.to(layer, {
            y: `+=${config.floatAmplitude}`,
            duration: config.floatDuration,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          floatTweens.push(tween);
        });
      }

      // ---------- 4) Parallax مع حركة الماوس (quickTo لأداء عالي) ----------
      const quickSetters = layers.map((layer) => ({
        x: gsap.quickTo(layer, "x", {
          duration: PARALLAX_QUICKTO_DURATION,
          ease: PARALLAX_QUICKTO_EASE,
        }),
        y: gsap.quickTo(layer, "y", {
          duration: PARALLAX_QUICKTO_DURATION,
          ease: PARALLAX_QUICKTO_EASE,
        }),
      }));

      function handleMouseMove(e) {
        const bounds = galleryRef.current.getBoundingClientRect();
        const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
        const relY = (e.clientY - bounds.top) / bounds.height - 0.5;

        layers.forEach((layer, i) => {
          const config = HERO_LAYERS_CONFIG[i] ?? HERO_LAYERS_CONFIG[0];
          const offsetX =
            relX * PARALLAX_MAX_OFFSET * config.parallaxFactor +
            config.restX * distanceScale;
          const offsetY =
            relY * PARALLAX_MAX_OFFSET * config.parallaxFactor +
            config.explodeY * distanceScale;

          quickSetters[i].x(offsetX);
          quickSetters[i].y(offsetY);
        });
      }

      galleryRef.current?.addEventListener("mousemove", handleMouseMove);

      // تنظيف الـ event listener والـ floating tweens عند إعادة تشغيل الـ context
      return () => {
        galleryRef.current?.removeEventListener("mousemove", handleMouseMove);
        floatTweens.forEach((t) => t.kill());
      };
    }, sectionRef);

    // تنظيف كل حاجة (timelines + ScrollTrigger + listeners) وقت الـ unmount
    return () => ctx.revert();
  }, [hero]);

  if (!hero) return null;

  return (
    <div className="hero-content" ref={sectionRef}>
      <h1 className="hero-title" ref={titleRef}>
        {hero.title}
      </h1>
      <p className="hero-desc" ref={descRef}>
        {hero.description}
      </p>
      <MainBtn value={hero.ctaLabel} className="hero-cta" ref={ctaRef} data-hero-item />

      {hero.images?.length > 0 && (
        <div className="hero-gallery" ref={galleryRef}>
          {hero.images.map((img, i) => (
            <img
              key={img.src ?? i}
              ref={addLayerRef}
              src={img.src}
              alt={img.alt ?? ""}
              className="hero-gallery__layer"
              style={{ zIndex: hero.images.length - i }}
              loading="lazy"
            />
          ))}
          {hero.warrantyBadge && (
            <img
              ref={stampRef}
              src={hero.warrantyBadge.src}
              alt={hero.warrantyBadge.alt ?? "ختم الضمان"}
              className="hero-gallery__stamp"
            />
          )}
        </div>
      )}
    </div>
  );
}
