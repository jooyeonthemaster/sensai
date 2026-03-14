interface SectionHeadingProps {
  title: string;
  titleEn?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, titleEn, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-1)]">
        {title}
      </h2>
      {titleEn && (
        <p className="mt-1 font-sans text-sm tracking-wider text-[var(--color-text-3)]">
          {titleEn}
        </p>
      )}
      {subtitle && (
        <p className="mt-4 max-w-[600px] font-sans text-base text-[var(--color-text-2)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
