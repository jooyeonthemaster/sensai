import Link from 'next/link';
import { SITE } from '@/constants/site';
import FooterNav from './components/FooterNav';
import FooterInfo from './components/FooterInfo';
import FooterSocial from './components/FooterSocial';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        {/* Logo */}
        <Link
          href="/"
          className="mb-12 inline-block font-serif text-xl tracking-widest text-[var(--color-text-1)]"
        >
          {SITE.name}
        </Link>

        {/* Nav + Social */}
        <div className="mb-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <FooterNav />
          <FooterSocial />
        </div>

        {/* Divider */}
        <div className="mb-6 border-t border-[var(--color-border)]" />

        {/* Company Info + Legal */}
        <FooterInfo />

        {/* Copyright */}
        <p className="mt-6 font-sans text-xs text-[var(--color-text-3)]">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
