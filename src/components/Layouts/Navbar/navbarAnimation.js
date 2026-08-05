import { useLayoutEffect } from "react";
import gsap from "gsap";
import {
    NAVBAR_ENTRANCE_DURATION,
    NAVBAR_ENTRANCE_EASE,
    NAVBAR_Y_START,
    NAVBAR_STAGGER,
} from "../../Home/heroAnimation.constants";

export function useNavbarEntrance(navRef) {
    useLayoutEffect(() => {
        if (!navRef.current) return;

        const ctx = gsap.context(() => {
            const items = navRef.current.querySelectorAll("[data-nav-item]");

            gsap.set(navRef.current, { opacity: 0, y: NAVBAR_Y_START });
            gsap.set(items, { opacity: 0, y: NAVBAR_Y_START * 0.5 });

            const tl = gsap.timeline();

            tl.to(navRef.current, {
                opacity: 1,
                y: 0,
                duration: NAVBAR_ENTRANCE_DURATION,
                ease: NAVBAR_ENTRANCE_EASE,
            }).to(
                items,
                {
                    opacity: 1,
                    y: 0,
                    duration: NAVBAR_ENTRANCE_DURATION * 0.7,
                    ease: NAVBAR_ENTRANCE_EASE,
                    stagger: NAVBAR_STAGGER,
                },
                "-=0.9" // تبدأ العناصر الداخلية قبل ما حركة الناف بار الكلية تخلص، لإحساس متصل
            );
        }, navRef);

        return () => ctx.revert();
    }, [navRef]);
}