import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  /** Internal route — renders a react-router Link */
  to?: string;
  /** External or anchor href — renders an <a> */
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 font-body font-medium ' +
  'transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background ' +
  'disabled:opacity-40 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-on-primary hover:bg-primary-fixed',
  secondary: 'border border-outline text-on-surface hover:bg-surface-container',
  ghost: 'text-on-surface underline underline-offset-4 decoration-outline-variant hover:decoration-on-surface',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  fullWidth,
  className = '',
  children,
}: ButtonProps) {
  const classes = [
    base,
    variants[variant],
    variant === 'ghost' ? sizes[size].replace(/px-\d+ /, '') : sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
