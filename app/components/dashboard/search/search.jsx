import { MdSearch } from 'react-icons/md';
import classes from './search.module.css';

function Search({ placeholder }) {
  return (
    <div className={classes.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        className={classes.input}
      />
    </div>
  );
}
export default Search;
