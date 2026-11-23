import classes from './pagination.module.css';

function Pagination() {
  return (
    <div className={classes.container}>
      <button type="button" className={classes.button} disabled>
        Previous
      </button>
      <button type="button" className={classes.button}>
        Next
      </button>
    </div>
  );
}
export default Pagination;
