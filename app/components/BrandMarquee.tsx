"use client";

import { useEffect, useRef } from "react";

const brands = [
  "CLIENTE 01",
  "CLIENTE 02",
  "CLIENTE 03",
  "CLIENTE 04",
  "CLIENTE 05",
  "CLIENTE 06",
  "CLIENTE 07",
  "CLIENTE 08",
];

export default function BrandMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, x: 0, scrollLeft: 0 });

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const singleLoop = marquee.scrollWidth / 3;
    marquee.scrollLeft = singleLoop;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let previousTime = performance.now();
    let frame = 0;

    const normalizePosition = () => {
      if (marquee.scrollLeft <= singleLoop * 0.45) {
        marquee.scrollLeft += singleLoop;
      } else if (marquee.scrollLeft >= singleLoop * 1.55) {
        marquee.scrollLeft -= singleLoop;
      }
    };

    const animate = (time: number) => {
      const elapsed = Math.min(time - previousTime, 50);
      previousTime = time;

      if (!pausedRef.current && !dragRef.current.active) {
        marquee.scrollLeft += elapsed * 0.033;
        normalizePosition();
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="brand-marquee"
      aria-label="Marcas que han confiado en Razen"
      tabIndex={0}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => {
        pausedRef.current = false;
        dragRef.current.active = false;
      }}
      onPointerDown={(event) => {
        pausedRef.current = true;
        if (event.pointerType !== "mouse") return;
        dragRef.current = {
          active: true,
          x: event.clientX,
          scrollLeft: event.currentTarget.scrollLeft,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!dragRef.current.active) return;
        event.currentTarget.scrollLeft =
          dragRef.current.scrollLeft - (event.clientX - dragRef.current.x);
      }}
      onPointerUp={(event) => {
        dragRef.current.active = false;
        if (event.pointerType !== "mouse") pausedRef.current = false;
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
      }}
      onPointerCancel={(event) => {
        dragRef.current.active = false;
        if (event.pointerType !== "mouse") pausedRef.current = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          event.currentTarget.scrollBy({
            left: event.key === "ArrowLeft" ? -260 : 260,
            behavior: "smooth",
          });
        }
      }}
    >
      <div className="brand-track">
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <span key={`${brand}-${index}`} aria-hidden={index >= brands.length}>
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
