'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '@/constants/faq';
import SectionHeading from '@/components/shared/SectionHeading';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-32">
      <SectionHeading title="FAQ" subtitle="자주 묻는 질문" />

      <div className="mx-auto max-w-[800px]">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className="border-b border-[var(--color-border)]"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="font-sans text-base text-[var(--color-text-1)]">
                {item.question}
              </span>
              <span className="ml-4 shrink-0 font-sans text-lg text-[var(--color-text-3)] transition-transform duration-300"
                style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 font-sans text-sm font-light leading-relaxed text-[var(--color-text-2)]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
