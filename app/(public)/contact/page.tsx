import type { Metadata } from 'next';
import ContactWizard from '@/components/ContactWizard';

export const metadata: Metadata = {
  title: 'Contact — SENSAI',
  description: '센세이에 미디어아트 도입 문의를 남겨주세요.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24">
      <ContactWizard />
    </div>
  );
}
