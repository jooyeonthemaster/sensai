'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Work } from '@/types';

interface WorkCardProps {
  work: Work;
  index: number;
}

export default function WorkCard({ work, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
    >
      <Link href={`/works/${work.slug}`} className="group block">
        {/* Thumbnail */}
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-border)] transition-transform duration-500 group-hover:scale-[1.02]">
          {work.thumbnail ? (
            <Image
              src={work.thumbnail}
              alt={work.title}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="font-serif text-lg text-[var(--color-text-3)]">
                {work.titleEn}
              </span>
            </div>
          )}
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
  );
}
