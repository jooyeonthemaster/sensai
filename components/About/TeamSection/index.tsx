'use client';

import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '@/constants/team';

export default function TeamSection() {
  return (
    <section className="border-t border-[var(--color-border)] py-24">
      <h2 className="mb-4 font-serif text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-1)]">
        Our Team
      </h2>
      <p className="mb-12 font-sans text-xs tracking-widest text-[var(--color-text-3)]">
        센세이를 만드는 사람들
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border border-[var(--color-border)] p-6"
          >
            <div className="mb-4">
              <h3 className="font-sans text-base font-medium text-[var(--color-text-1)]">
                {member.name}
              </h3>
              <p className="mt-0.5 font-sans text-xs text-[var(--color-text-3)]">
                {member.nameEn}
              </p>
            </div>

            <div className="space-y-2">
              <div>
                <span className="font-sans text-xs text-[var(--color-text-3)]">직급</span>
                <p className="font-sans text-sm text-[var(--color-text-2)]">{member.position}</p>
              </div>
              <div>
                <span className="font-sans text-xs text-[var(--color-text-3)]">전공</span>
                <p className="font-sans text-sm text-[var(--color-text-2)]">{member.major}</p>
              </div>
              <div>
                <span className="font-sans text-xs text-[var(--color-text-3)]">역할</span>
                <p className="font-sans text-sm text-[var(--color-text-2)]">{member.role}</p>
              </div>
              <div>
                <span className="font-sans text-xs text-[var(--color-text-3)]">경력</span>
                <p className="font-sans text-sm text-[var(--color-text-2)]">{member.career}</p>
              </div>
            </div>

            {member.workType === '채용 예정' && (
              <p className="mt-4 font-sans text-xs text-[var(--color-text-3)]">
                * 채용 예정
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
