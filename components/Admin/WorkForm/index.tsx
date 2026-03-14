'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createWork, updateWork } from '@/lib/data/works';

const SPACE_OPTIONS = [
  { value: 'exhibition', label: '전시관' },
  { value: 'festival', label: '축제·팝업' },
  { value: 'commercial', label: '상업공간' },
];

const TECH_OPTIONS = [
  { value: 'computer-vision', label: '컴퓨터 비전' },
  { value: 'generative-ai', label: '생성형 AI' },
  { value: 'motion-sensing', label: '모션 센싱' },
  { value: 'projection', label: '프로젝션' },
  { value: 'sound-generation', label: '사운드 생성' },
  { value: 'bio-sensing', label: '바이오 센싱' },
];

interface WorkFormProps {
  mode: 'create' | 'edit';
  initialData?: Record<string, unknown>;
  workId?: string;
}

export default function WorkForm({ mode, initialData, workId }: WorkFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    slug: (initialData?.slug as string) || '',
    title: (initialData?.title as string) || '',
    titleEn: (initialData?.titleEn as string) || '',
    question: (initialData?.question as string) || '',
    medium: (initialData?.medium as string) || '',
    year: (initialData?.year as number) || 2025,
    description: (initialData?.description as string[]) || [''],
    spaceCategory: (initialData?.spaceCategory as string) || 'exhibition',
    technologies: (initialData?.technologies as string[]) || [],
    featured: (initialData?.featured as boolean) || false,
    isPublished: initialData?.isPublished !== undefined ? (initialData.isPublished as boolean) : true,
    sortOrder: (initialData?.sortOrder as number) || 0,
    specs: {
      minArea: ((initialData?.specs as Record<string, unknown>)?.minArea as string) || '',
      idealArea: ((initialData?.specs as Record<string, unknown>)?.idealArea as string) || '',
      ceilingHeight: ((initialData?.specs as Record<string, unknown>)?.ceilingHeight as string) || '',
      equipment: ((initialData?.specs as Record<string, unknown>)?.equipment as string[]) || [''],
      setupTime: ((initialData?.specs as Record<string, unknown>)?.setupTime as string) || '',
      power: ((initialData?.specs as Record<string, unknown>)?.power as string) || '',
      darkRoom: ((initialData?.specs as Record<string, unknown>)?.darkRoom as boolean) || false,
    },
  });

  const updateField = (field: string, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateSpec = (field: string, value: unknown) => {
    setForm((prev) => ({ ...prev, specs: { ...prev.specs, [field]: value } }));
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const updated = [...form.description];
    updated[index] = value;
    updateField('description', updated);
  };

  const addDescription = () => updateField('description', [...form.description, '']);
  const removeDescription = (index: number) => {
    if (form.description.length <= 1) return;
    updateField('description', form.description.filter((_, i) => i !== index));
  };

  const handleEquipmentChange = (index: number, value: string) => {
    const updated = [...form.specs.equipment];
    updated[index] = value;
    updateSpec('equipment', updated);
  };

  const addEquipment = () => updateSpec('equipment', [...form.specs.equipment, '']);
  const removeEquipment = (index: number) => {
    if (form.specs.equipment.length <= 1) return;
    updateSpec('equipment', form.specs.equipment.filter((_, i) => i !== index));
  };

  const toggleTech = (tech: string) => {
    const techs = form.technologies.includes(tech)
      ? form.technologies.filter((t) => t !== tech)
      : [...form.technologies, tech];
    updateField('technologies', techs);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const data = {
        ...form,
        description: form.description.filter((d) => d.trim()),
        specs: {
          ...form.specs,
          equipment: form.specs.equipment.filter((e) => e.trim()),
        },
      };

      if (mode === 'create') {
        await createWork(data);
      } else if (workId) {
        await updateWork(workId, data);
      }
      router.push('/admin/works');
    } catch (error) {
      console.error('Save error:', error);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setSaving(false);
    }
  };

  const inputClass = 'w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 font-sans text-sm text-[var(--color-text-1)] placeholder:text-[var(--color-text-3)] focus:border-[var(--color-text-2)] focus:outline-none';
  const labelClass = 'mb-1 block font-sans text-xs text-[var(--color-text-3)]';

  return (
    <form onSubmit={handleSubmit} className="max-w-[800px] space-y-8">
      {/* 기본 정보 */}
      <section>
        <h3 className="mb-4 font-sans text-sm font-medium text-[var(--color-text-1)]">기본 정보</h3>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>슬러그 (URL)</label>
              <input type="text" value={form.slug} onChange={(e) => updateField('slug', e.target.value)} className={inputClass} placeholder="gaze-of-others" required />
            </div>
            <div>
              <label className={labelClass}>연도</label>
              <input type="number" value={form.year} onChange={(e) => updateField('year', Number(e.target.value))} className={inputClass} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>제목 (한글)</label>
              <input type="text" value={form.title} onChange={(e) => updateField('title', e.target.value)} className={inputClass} placeholder="타인의 시선" required />
            </div>
            <div>
              <label className={labelClass}>제목 (영문)</label>
              <input type="text" value={form.titleEn} onChange={(e) => updateField('titleEn', e.target.value)} className={inputClass} placeholder="The Gaze of Others" required />
            </div>
          </div>
          <div>
            <label className={labelClass}>핵심 질문</label>
            <input type="text" value={form.question} onChange={(e) => updateField('question', e.target.value)} className={inputClass} placeholder="우리는 타인의 시선 속에서 어떤 존재인가?" required />
          </div>
          <div>
            <label className={labelClass}>매체</label>
            <input type="text" value={form.medium} onChange={(e) => updateField('medium', e.target.value)} className={inputClass} placeholder="AI 얼굴 인식, 실시간 생성 영상, 프로젝션" required />
          </div>
        </div>
      </section>

      {/* 설명 */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-sans text-sm font-medium text-[var(--color-text-1)]">설명</h3>
          <button type="button" onClick={addDescription} className="font-sans text-xs text-[var(--color-text-3)] hover:text-[var(--color-text-1)]">+ 문단 추가</button>
        </div>
        <div className="space-y-3">
          {form.description.map((desc, i) => (
            <div key={i} className="flex gap-2">
              <textarea
                value={desc}
                onChange={(e) => handleDescriptionChange(i, e.target.value)}
                className={`${inputClass} min-h-[80px] resize-y`}
                placeholder={`문단 ${i + 1}`}
              />
              {form.description.length > 1 && (
                <button type="button" onClick={() => removeDescription(i)} className="px-2 font-sans text-xs text-red-400 hover:text-red-300">×</button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 카테고리 + 기술 */}
      <section>
        <h3 className="mb-4 font-sans text-sm font-medium text-[var(--color-text-1)]">분류</h3>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>공간 카테고리</label>
            <select value={form.spaceCategory} onChange={(e) => updateField('spaceCategory', e.target.value)} className={inputClass}>
              {SPACE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>사용 기술</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {TECH_OPTIONS.map((tech) => (
                <button
                  key={tech.value}
                  type="button"
                  onClick={() => toggleTech(tech.value)}
                  className={`border px-3 py-1.5 font-sans text-xs transition-colors ${
                    form.technologies.includes(tech.value)
                      ? 'border-[var(--color-text-1)] bg-[var(--color-surface)] text-[var(--color-text-1)]'
                      : 'border-[var(--color-border)] text-[var(--color-text-3)] hover:border-[var(--color-text-3)]'
                  }`}
                >
                  {tech.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 설치 사양 */}
      <section>
        <h3 className="mb-4 font-sans text-sm font-medium text-[var(--color-text-1)]">설치 사양</h3>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>최소 면적</label>
              <input type="text" value={form.specs.minArea} onChange={(e) => updateSpec('minArea', e.target.value)} className={inputClass} placeholder="20m²" />
            </div>
            <div>
              <label className={labelClass}>권장 면적</label>
              <input type="text" value={form.specs.idealArea} onChange={(e) => updateSpec('idealArea', e.target.value)} className={inputClass} placeholder="30–50m²" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>천장 높이</label>
              <input type="text" value={form.specs.ceilingHeight} onChange={(e) => updateSpec('ceilingHeight', e.target.value)} className={inputClass} placeholder="3m 이상" />
            </div>
            <div>
              <label className={labelClass}>셋업 시간</label>
              <input type="text" value={form.specs.setupTime} onChange={(e) => updateSpec('setupTime', e.target.value)} className={inputClass} placeholder="2–3일" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>전력</label>
              <input type="text" value={form.specs.power} onChange={(e) => updateSpec('power', e.target.value)} className={inputClass} placeholder="220V, 15A" />
            </div>
            <div className="flex items-end gap-3 pb-1">
              <label className="flex items-center gap-2 font-sans text-sm text-[var(--color-text-2)]">
                <input type="checkbox" checked={form.specs.darkRoom} onChange={(e) => updateSpec('darkRoom', e.target.checked)} className="accent-[var(--color-text-1)]" />
                암실 필요
              </label>
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className={labelClass}>필요 장비</label>
              <button type="button" onClick={addEquipment} className="font-sans text-xs text-[var(--color-text-3)] hover:text-[var(--color-text-1)]">+ 추가</button>
            </div>
            <div className="space-y-2">
              {form.specs.equipment.map((eq, i) => (
                <div key={i} className="flex gap-2">
                  <input type="text" value={eq} onChange={(e) => handleEquipmentChange(i, e.target.value)} className={inputClass} placeholder="고해상도 프로젝터" />
                  {form.specs.equipment.length > 1 && (
                    <button type="button" onClick={() => removeEquipment(i)} className="px-2 font-sans text-xs text-red-400 hover:text-red-300">×</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 설정 */}
      <section>
        <h3 className="mb-4 font-sans text-sm font-medium text-[var(--color-text-1)]">설정</h3>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 font-sans text-sm text-[var(--color-text-2)]">
            <input type="checkbox" checked={form.featured} onChange={(e) => updateField('featured', e.target.checked)} className="accent-[var(--color-text-1)]" />
            메인 페이지 노출
          </label>
          <label className="flex items-center gap-2 font-sans text-sm text-[var(--color-text-2)]">
            <input type="checkbox" checked={form.isPublished} onChange={(e) => updateField('isPublished', e.target.checked)} className="accent-[var(--color-text-1)]" />
            발행
          </label>
          <div className="flex items-center gap-2">
            <label className="font-sans text-sm text-[var(--color-text-2)]">정렬 순서</label>
            <input type="number" value={form.sortOrder} onChange={(e) => updateField('sortOrder', Number(e.target.value))} className="w-20 border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-sans text-sm text-[var(--color-text-1)] focus:outline-none" />
          </div>
        </div>
      </section>

      {/* 저장 */}
      <div className="flex gap-3 border-t border-[var(--color-border)] pt-6">
        <button
          type="submit"
          disabled={saving}
          className="bg-[var(--color-text-1)] px-6 py-2.5 font-sans text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {saving ? '저장 중...' : mode === 'create' ? '작품 등록' : '수정 완료'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/works')}
          className="border border-[var(--color-border)] px-6 py-2.5 font-sans text-sm text-[var(--color-text-2)] transition-colors hover:border-[var(--color-text-3)]"
        >
          취소
        </button>
      </div>
    </form>
  );
}
