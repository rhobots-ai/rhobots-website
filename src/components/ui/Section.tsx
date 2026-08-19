import type { ReactNode } from 'react';

type Tone = 'base' | 'muted' | 'inverse';
type Container = 'default' | 'wide' | 'narrow' | 'none';

export interface SectionProps {
  tone?: Tone;
  container?: Container;
  id?: string;
  /** Draw a hairline rule along the top edge */
  divided?: boolean;
  className?: string;
  children: ReactNode;
}

const tones: Record<Tone, string> = {
  base: 'bg-background text-on-surface',
  muted: 'bg-surface-container text-on-surface',
  inverse: 'bg-inverse-surface text-inverse-on-surface',
};

const containers: Record<Container, string> = {
  default: 'mx-auto w-full max-w-6xl px-6 md:px-10',
  wide: 'mx-auto w-full max-w-7xl px-6 md:px-10',
  narrow: 'mx-auto w-full max-w-3xl px-6 md:px-10',
  none: '',
};

export default function Section({
  tone = 'base',
  container = 'default',
  id,
  divided = false,
  className = '',
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        'py-20 md:py-28',
        tones[tone],
        divided ? 'border-t border-outline-variant' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {container === 'none' ? children : <div className={containers[container]}>{children}</div>}
    </section>
  );
}
