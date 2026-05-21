import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variants = {
  primary:
    'bg-bronze-500 text-white hover:bg-bronze-600 border border-bronze-500 hover:border-bronze-600',
  secondary:
    'bg-transparent text-stone-900 hover:bg-cream-200 border border-stone-900 hover:border-stone-700',
  ghost:
    'bg-transparent text-bronze-500 hover:text-bronze-600 border border-transparent group',
  outline:
    'bg-transparent text-white hover:bg-white/10 border border-white/60 hover:border-white',
};

const sizes = {
  sm: 'px-5 py-2.5 text-xs tracking-[0.06em]',
  md: 'px-7 py-3.5 text-sm tracking-[0.04em]',
  lg: 'px-9 py-4.5 text-sm tracking-[0.04em]',
};

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 font-sans font-medium rounded-none transition-all duration-300 uppercase',
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 pointer-events-none',
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
