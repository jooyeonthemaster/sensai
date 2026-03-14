'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { WORKS } from '@/constants/works';
import type { SpaceCategory, Technology } from '@/types';

export function useWorksFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeSpace = searchParams?.get('space') as SpaceCategory | null ?? null;
  const activeTech = searchParams?.get('tech') as Technology | null ?? null;

  const setFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams?.toString() ?? '');
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`${pathname ?? '/works'}?${params.toString()}`, { scroll: false });
  };

  const clearFilters = () => {
    router.replace(pathname ?? '/works', { scroll: false });
  };

  const filteredWorks = WORKS.filter((work) => {
    if (activeSpace && work.spaceCategory !== activeSpace) return false;
    if (activeTech && !work.technologies.includes(activeTech)) return false;
    return true;
  });

  return { activeSpace, activeTech, setFilter, clearFilters, filteredWorks };
}
