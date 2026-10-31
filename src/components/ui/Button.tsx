import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark-outline' | 'solid-blue';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all';

  const sizeStyles = {
    sm: 'px-4 py-2 font-label-sm text-label-sm rounded-lg',
    md: 'px-7 py-3.5 font-label-md text-label-md rounded-[10px]',
    lg: 'px-9 py-4 font-label-md text-label-md rounded-[10px]',
  }[size];

  const variantStyles = {
    primary:
      'font-semibold text-white bg-gradient-to-r from-[#00E5FF] to-[#0A6CFF] shadow-[0_0_24px_rgba(0,229,255,0.4)] hover:shadow-[0_0_36px_rgba(0,229,255,0.65)] hover:scale-[1.02] active:scale-[0.99]',
    secondary:
      'font-medium text-secondary-fixed bg-[#091b35] border border-[#1a3359] hover:bg-[#11294e] shadow-sm',
    'dark-outline':
      'font-medium text-white bg-[#0a1e3b]/80 border border-[#1e3962] hover:bg-[#112d54] shadow-sm transition-colors',
    'solid-blue':
      'font-semibold text-white bg-[#0A6CFF] hover:bg-[#0056d1] shadow-sm',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && (
        <span className="material-symbols-outlined mr-2 text-[18px]">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="material-symbols-outlined ml-2 text-[20px]">{icon}</span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...rest}>
      {renderContent()}
    </button>
  );
};
