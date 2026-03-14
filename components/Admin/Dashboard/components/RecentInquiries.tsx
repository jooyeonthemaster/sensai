import Link from 'next/link';

interface Inquiry {
  id: string;
  companyName?: string;
  inquiryType?: string;
  status?: string;
  createdAt?: { seconds: number };
}

interface RecentInquiriesProps {
  inquiries: Inquiry[];
}

const STATUS_LABELS: Record<string, string> = {
  new: '신규',
  in_progress: '진행중',
  completed: '완료',
  archived: '보관',
};

const STATUS_COLORS: Record<string, string> = {
  new: 'text-blue-400',
  in_progress: 'text-yellow-400',
  completed: 'text-green-400',
  archived: 'text-[var(--color-text-3)]',
};

export default function RecentInquiries({ inquiries }: RecentInquiriesProps) {
  if (inquiries.length === 0) {
    return (
      <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h3 className="mb-4 font-sans text-sm font-medium text-[var(--color-text-1)]">
          최근 문의
        </h3>
        <p className="font-sans text-sm text-[var(--color-text-3)]">문의가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-sans text-sm font-medium text-[var(--color-text-1)]">최근 문의</h3>
        <Link
          href="/admin/inquiries"
          className="font-sans text-xs text-[var(--color-text-3)] hover:text-[var(--color-text-2)]"
        >
          전체 보기 →
        </Link>
      </div>
      <div className="space-y-3">
        {inquiries.slice(0, 5).map((inq) => (
          <Link
            key={inq.id}
            href={`/admin/inquiries/${inq.id}`}
            className="flex items-center justify-between py-1 transition-colors hover:bg-[var(--color-bg)] px-2 -mx-2"
          >
            <div>
              <span className="font-sans text-sm text-[var(--color-text-1)]">
                {inq.companyName || '이름 없음'}
              </span>
              <span className="ml-2 font-sans text-xs text-[var(--color-text-3)]">
                {inq.inquiryType}
              </span>
            </div>
            <span className={`font-sans text-xs ${STATUS_COLORS[inq.status || 'new']}`}>
              {STATUS_LABELS[inq.status || 'new']}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
