import type { ReactNode } from 'react';

export interface EyebrowProps {
  /** Optional section number, rendered as "01 /" */
  number?: string;
  tone?: 'accent' | 'muted';
  className?: string;
  children: ReactNode;
}

/**
 * The one place uppercase survives the redesign: a short mono label.
 */
export default function Eyebrow({
  number,
  tone = 'muted',
  className = '',
  children,
}: EyebrowProps) {
  return (
    <p
      className={[
        'font-mono text-xs uppercase tracking-[0.18em]',
        tone === 'accent' ? 'text-primary-fixed' : 'text-outline',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {number && <span className="text-on-surface-variant">{number} / </span>}
      {children}
    </p>
  );
}
