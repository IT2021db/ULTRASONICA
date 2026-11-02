
import React from "react";

export const HeroBackground: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg
          className="w-full h-full"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              height="97"
              id="hero-hex-grid"
              patternTransform="scale(1.2)"
              patternUnits="userSpaceOnUse"
              width="56"
            >
              <path
                d="M28 0 L56 16.17 L56 48.5 L28 64.67 L0 48.5 L0 16.17 Z M28 48.5 L56 64.67 L56 97 L28 113.17 L0 97 L0 64.67 Z"
                fill="none"
                stroke="#00E5FF"
                strokeOpacity="0.25"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>

          <rect
            fill="url(#hero-hex-grid)"
            height="100%"
            width="100%"
          />
        </svg>
      </div>

      {/* Soft glowing orb accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0A6CFF]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-[#00E5FF]/15 rounded-full blur-[100px] pointer-events-none" />
    </>
  );
};
