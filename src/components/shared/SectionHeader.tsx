import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'eyebrow',
            light ? 'text-bronze-300' : 'text-bronze-500'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-heading text-heading-lg text-balance',
          light ? 'text-white' : 'text-stone-900',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'font-sans text-base md:text-lg leading-relaxed max-w-prose-wide',
            light ? 'text-stone-300' : 'text-stone-500',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
