import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Tone = 'base' | 'muted';
type Padding = 'sm' | 'md' | 'lg';

export interface CardProps {
  tone?: Tone;
  padding?: Padding;
  /** Renders the card as a link and adds hover affordance */
  to?: string;
  className?: string;
  children: ReactNode;
}

const tones: Record<Tone, string> = {
  base: 'bg-background border border-outline-variant',
  muted: 'bg-surface-container border border-outline-variant',
};

const paddings: Record<Padding, string> = {
  sm: 'p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
};

export default function Card({
  tone = 'base',
  padding = 'md',
  to,
  className = '',
  children,
}: CardProps) {
  const classes = [
    tones[tone],
    paddings[padding],
    to ? 'block transition-colors hover:border-outline hover:bg-surface-container' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
