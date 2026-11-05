interface ZenoxLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  xs: 24,
  sm: 28,
  md: 36,
  lg: 48,
  xl: 64,
};

export default function ZenoxLogo({ size = 'md', className }: ZenoxLogoProps) {
  const px = sizes[size];
  const id = `zg-${size}`;

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zenox"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="9" fill={`url(#${id})`} />
      <path
        d="M10 11H26L10 25H26"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
