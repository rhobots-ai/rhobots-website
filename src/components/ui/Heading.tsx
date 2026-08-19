import type { ReactNode } from 'react';

type Level = 1 | 2 | 3 | 4;

export interface HeadingProps {
  level?: Level;
  /** Override the rendered tag without changing the visual level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  align?: 'left' | 'center';
  className?: string;
  children: ReactNode;
}

/**
 * Sentence-case, medium-weight headings. Deliberately no uppercase,
 * italic, heavy weights or negative tracking — see the redesign brief.
 */
const levels: Record<Level, string> = {
  1: 'text-4xl md:text-5xl font-semibold leading-[1.1]',
  2: 'text-3xl md:text-4xl font-semibold leading-[1.15]',
  3: 'text-xl md:text-2xl font-semibold leading-snug',
  4: 'text-base md:text-lg font-semibold leading-snug',
};

export default function Heading({
  level = 2,
  as,
  align = 'left',
  className = '',
  children,
}: HeadingProps) {
  const Tag = (as ?? (`h${level}` as const)) as 'h1';

  return (
    <Tag
      className={[
        'font-headline text-on-surface',
        levels[level],
        align === 'center' ? 'text-center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}
