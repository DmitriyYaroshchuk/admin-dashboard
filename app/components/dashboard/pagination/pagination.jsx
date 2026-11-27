'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ITEM_PER_PAGE, parsePage } from '@/app/lib/pagination';
import classes from './pagination.module.css';

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = parsePage(searchParams.get('page'));
  const hasPrev = page > 1;
  const hasNext = page * ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(type === 'prev' ? page - 1 : page + 1));
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={classes.container}>
      <button
        type="button"
        className={classes.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        type="button"
        className={classes.button}
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;
