import type { Metadata } from 'next';
import VisionSection from '@/components/About/VisionSection';
import TechnologySection from '@/components/About/TechnologySection';
import TeamSection from '@/components/About/TeamSection';
import HistorySection from '@/components/About/HistorySection';
import FAQSection from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'About — SENSAI',
  description: 'SENSAI는 AI를 인식의 매체로 사용하는 미디어아트 스튜디오입니다.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6">
      <VisionSection />
      <TechnologySection />
      <TeamSection />
      <HistorySection />
      <FAQSection />
    </div>
  );
}
