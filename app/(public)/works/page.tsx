import type { Metadata } from 'next';
import { Suspense } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import WorksContent from './WorksContent';

export const metadata: Metadata = {
  title: 'Works — SENSAI',
  description:
    'SENSAI의 AI 인터랙티브 미디어아트 IP 포트폴리오. 전시, 축제, 상업 공간을 위한 작품을 만나보세요.',
};

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-24">
      <SectionHeading
        title="Works"
        subtitle="센세이의 AI 인터랙티브 미디어아트 IP 포트폴리오"
      />
      <Suspense>
        <WorksContent />
      </Suspense>
    </div>
  );
}
