import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { WORKS } from '@/constants/works';
import WorkSpecs from '@/components/WorkDetail/WorkSpecs';
import WorkInquiryForm from '@/components/WorkDetail/WorkInquiryForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return WORKS.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} — SENSAI`,
    description: work.question,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const workIndex = WORKS.findIndex((w) => w.slug === slug);
  if (workIndex === -1) notFound();

  const work = WORKS[workIndex];
  const prev = workIndex > 0 ? WORKS[workIndex - 1] : null;
  const next = workIndex < WORKS.length - 1 ? WORKS[workIndex + 1] : null;

  return (
    <div>
      {/* Hero image */}
      <section className="relative h-[70vh] overflow-hidden">
        {work.heroImage ? (
          <Image
            src={work.heroImage}
            alt={work.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
      </section>

      {/* Work info */}
      <section className="mx-auto max-w-[800px] px-6 py-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--color-text-1)]">
              {work.title}
            </h1>
            <p className="font-sans text-sm tracking-wide text-[var(--color-text-2)]">
              {work.titleEn}
            </p>
          </div>

          <p className="font-serif text-xl font-light italic text-[var(--color-text-2)]">
            &ldquo;{work.question}&rdquo;
          </p>

          <div className="flex flex-col gap-4 pt-4">
            {work.description.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base font-light leading-relaxed text-[var(--color-text-2)]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-1 border-t border-[var(--color-border)] pt-6">
            <p className="font-sans text-xs uppercase tracking-wider text-[var(--color-text-3)]">
              매체
            </p>
            <p className="font-sans text-sm text-[var(--color-text-2)]">{work.medium}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-sans text-xs uppercase tracking-wider text-[var(--color-text-3)]">
              연도
            </p>
            <p className="font-sans text-sm text-[var(--color-text-2)]">{work.year}</p>
          </div>
        </div>

        {/* Installation Specs */}
        <WorkSpecs specs={work.specs} />

        {/* Inquiry Form */}
        <WorkInquiryForm workTitle={work.title} />

        {/* Prev / Next navigation */}
        <div className="mt-20 flex items-center justify-between border-t border-[var(--color-border)] pt-8">
          {prev ? (
            <Link
              href={`/works/${prev.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="font-sans text-xs text-[var(--color-text-3)]">← 이전 작품</span>
              <span className="font-serif text-lg text-[var(--color-text-2)] transition-colors duration-300 group-hover:text-[var(--color-text-1)]">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/works/${next.slug}`}
              className="group flex flex-col items-end gap-1"
            >
              <span className="font-sans text-xs text-[var(--color-text-3)]">다음 작품 →</span>
              <span className="font-serif text-lg text-[var(--color-text-2)] transition-colors duration-300 group-hover:text-[var(--color-text-1)]">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}
