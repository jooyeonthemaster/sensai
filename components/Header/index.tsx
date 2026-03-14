'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SITE } from '@/constants/site';
import { useScrollDirection } from './hooks/useScrollDirection';
import DesktopNav from './components/DesktopNav';
import InquireCTA from './components/InquireCTA';
import MobileMenu from './components/MobileMenu';

export default function Header() {
  const { isHidden } = useScrollDirection();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? '-100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)]/50 bg-[var(--color-bg)]/85 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg tracking-widest text-[var(--color-text-1)]"
          >
            {SITE.name}
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <InquireCTA />
            </div>
            <div className="sm:hidden">
              <InquireCTA compact />
            </div>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="text-[var(--color-text-2)] transition-colors hover:text-[var(--color-text-1)] lg:hidden"
              aria-label="메뉴 열기"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
