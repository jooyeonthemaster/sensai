'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { WORKS } from '@/constants/works';
import SectionHeading from '@/components/shared/SectionHeading';

export default function FeaturedWorks() {
  const featured = WORKS.filter((w) => w.featured);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-32">
      <SectionHeading title="Featured Works" subtitle="센세이의 대표 미디어아트 IP" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((work, i) => (
          <motion.div
            key={work.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: 'easeOut' }}
          >
            <Link href={`/works/${work.slug}`} className="group block">
              {/* Thumbnail placeholder */}
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-border)] transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="flex h-full items-center justify-center">
                  <span className="font-serif text-lg text-[var(--color-text-3)]">
                    {work.titleEn}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="font-serif text-xl text-[var(--color-text-1)]">
                  {work.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-[var(--color-text-3)]">
                  {work.titleEn}
                </p>
                <p className="mt-2 font-serif text-sm italic text-[var(--color-text-2)]">
                  &ldquo;{work.question}&rdquo;
                </p>
                <p className="mt-2 font-sans text-xs text-[var(--color-text-3)]">
                  {work.medium} · {work.year}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/works"
          className="font-sans text-sm tracking-wider text-[var(--color-text-3)] transition-colors hover:text-[var(--color-text-1)]"
        >
          VIEW ALL WORKS →
        </Link>
      </div>
    </section>
  );
}
