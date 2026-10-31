import React from 'react';

export interface BadgeProps {
  variant?: 'telemetry-dark' | 'telemetry-light' | 'service-pill' | 'disclaimer' | 'white-pill';
  dot?: boolean;
  pulse?: boolean;
  ping?: boolean;
  icon?: string;
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'telemetry-light',
  dot = true,
  pulse = true,
  ping = false,
  icon,
  className = '',
  children,
}) => {
  const baseStyles =
    'inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full font-subheading-eyebrow text-subheading-eyebrow text-[11px] sm:text-[13px]';

  const variantStyles = {
    'telemetry-dark':
      'bg-[#0a1e3a]/90 border border-[#1b355d] backdrop-blur-md shadow-sm text-secondary-fixed uppercase tracking-wider font-semibold',
    'telemetry-light':
      'bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] shadow-sm tracking-wider font-bold',
    'service-pill':
      'bg-[#F0F7FF] text-[#0A6CFF] border border-[#D5E7FF] uppercase tracking-widest font-semibold',
    'disclaimer':
      'bg-[#EBF3FF] border border-[#D0E2FF] text-[#0A6CFF] shadow-sm tracking-widest uppercase font-bold',
    'white-pill':
      'bg-white border border-slate-200 shadow-sm text-[#0A6CFF] uppercase tracking-wider font-bold',
  }[variant];

  const renderDot = () => {
    if (!dot) return null;

    if (ping) {
      return (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      );
    }

    if (variant === 'telemetry-dark') {
      return (
        <span
          className={`w-2 h-2 rounded-full bg-secondary-fixed shadow-[0_0_8px_#00daf3] ${
            pulse ? 'animate-pulse' : ''
          }`}
        ></span>
      );
    }

    return (
      <span
        className={`w-1.5 h-1.5 rounded-full bg-[#0A6CFF] ${pulse ? 'animate-pulse' : ''}`}
      ></span>
    );
  };

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`.trim()}>
      {renderDot()}
      {icon && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
