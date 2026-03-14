'use client';

import WorksFilter from '@/components/Works/WorksFilter';
import WorksGrid from '@/components/Works/WorksGrid';
import { useWorksFilter } from '@/components/Works/WorksFilter/hooks/useWorksFilter';

export default function WorksContent() {
  const { activeSpace, activeTech, setFilter, filteredWorks } = useWorksFilter();

  return (
    <>
      <WorksFilter
        activeSpace={activeSpace}
        activeTech={activeTech}
        onFilter={setFilter}
      />
      <div className="mt-12">
        <WorksGrid works={filteredWorks} />
      </div>
    </>
  );
}
