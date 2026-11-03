import React, { useRef } from "react";

export const HeroInsignia: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = badgeRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `perspective(600px) rotateX(${-y * 0.08}deg) rotateY(${x * 0.08}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const el = badgeRef.current;
    if (!el) return;
    el.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={badgeRef}
      id="hero-floating-badge"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center transition-transform duration-300 ease-out "
    >
      <img
        alt="ULTRASONICA Geometric Resonance Emblem"
        className="w-full h-full object-contain filter drop-shadow-[0_0_32px_rgba(0,229,255,0.45)]"
        src={`${import.meta.env.BASE_URL}images/logo.png`}
      />
    </div>
  );
};
