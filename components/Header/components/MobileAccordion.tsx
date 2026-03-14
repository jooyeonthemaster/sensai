'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavItem } from '@/types';

interface MobileAccordionProps {
  item: NavItem;
  onClose: () => void;
}

export default function MobileAccordion({ item, onClose }: MobileAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block py-4 font-serif text-3xl text-[var(--color-text-1)] transition-colors hover:text-[var(--color-text-2)]"
      >
        {item.labelEn}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between py-4 font-serif text-3xl text-[var(--color-text-1)] transition-colors hover:text-[var(--color-text-2)]"
      >
        {item.labelEn}
        <svg
          className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-4">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block py-2 font-sans text-lg text-[var(--color-text-2)] transition-colors hover:text-[var(--color-text-1)]"
                >
                  {child.labelEn}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
