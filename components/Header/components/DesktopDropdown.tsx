'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import type { NavSubItem } from '@/types';

interface DesktopDropdownProps {
  items: NavSubItem[];
  isOpen: boolean;
}

export default function DesktopDropdown({ items, isOpen }: DesktopDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute top-full left-0 mt-2 min-w-[240px] border border-[var(--color-border)] bg-[var(--color-surface)] py-2"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-3 transition-colors hover:bg-[var(--color-bg)]"
            >
              <span className="block font-sans text-sm text-[var(--color-text-1)]">
                {item.labelEn}
              </span>
              {item.description && (
                <span className="mt-0.5 block font-sans text-xs text-[var(--color-text-3)]">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
