'use client';
import { MdSearch } from 'react-icons/md';
import classes from './search.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((event) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.value) {
      event.target.value.length > 2 && params.set('q', event.target.value);
    } else {
      params.delete('q');
    }

    replace(`${pathname}?${params}`);
  }, 400);

  return (
    <div className={classes.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        className={classes.input}
        onChange={handleSearch}
      />
    </div>
  );
}
export default Search;
