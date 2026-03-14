import Link from 'next/link';

interface InquiryButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

export default function InquiryButton({
  label = 'INQUIRE NOW',
  href = '/contact',
  className = '',
}: InquiryButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-block border border-[var(--color-text-1)] px-8 py-3
        font-sans text-sm tracking-widest text-[var(--color-text-1)]
        transition-all duration-300
        hover:bg-[var(--color-text-1)] hover:text-[var(--color-bg)]
        ${className}
      `}
    >
      {label}
    </Link>
  );
}
