import type { ReactNode } from 'react';
import Eyebrow from './Eyebrow';
import Heading from './Heading';

export interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  /** Optional right-hand visual; when absent the hero is a single column */
  media?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  media,
  align = 'left',
  className = '',
}: HeroProps) {
  const copy = (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <Heading level={1} align={align}>
        {title}
      </Heading>
      {subtitle && (
        <p className="mt-6 font-body text-lg leading-relaxed text-on-surface-variant">{subtitle}</p>
      )}
      {actions && (
        <div
          className={[
            'mt-10 flex flex-col gap-3 sm:flex-row sm:items-center',
            align === 'center' ? 'sm:justify-center' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {actions}
        </div>
      )}
    </div>
  );

  return (
    <section className={['bg-background py-20 md:py-32', className].filter(Boolean).join(' ')}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {media ? (
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {copy}
            <div>{media}</div>
          </div>
        ) : (
          copy
        )}
      </div>
    </section>
  );
}
