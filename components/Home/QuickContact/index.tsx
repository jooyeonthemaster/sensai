'use client';

import { motion } from 'framer-motion';
import InquiryButton from '@/components/shared/InquiryButton';

export default function QuickContact() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] leading-snug text-[var(--color-text-1)]"
        >
          공간을 변화시킬 준비가 되셨나요?
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 font-sans text-sm text-[var(--color-text-2)]"
        >
          축제, 전시, 팝업스토어에 AI 미디어아트를 도입하세요.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <InquiryButton />
        </motion.div>
      </div>
    </section>
  );
}
