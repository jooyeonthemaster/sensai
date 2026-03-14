'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@/constants/navigation';
import MobileAccordion from './MobileAccordion';
import InquireCTA from './InquireCTA';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-[var(--color-bg)]"
        >
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="text-[var(--color-text-2)] transition-colors hover:text-[var(--color-text-1)]"
              aria-label="메뉴 닫기"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-8">
            {NAV_ITEMS.map((item) => (
              <MobileAccordion key={item.href} item={item} onClose={onClose} />
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="p-8">
            <div onClick={onClose}>
              <InquireCTA />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
