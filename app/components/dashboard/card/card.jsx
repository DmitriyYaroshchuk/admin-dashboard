import { MdSupervisedUserCircle } from 'react-icons/md';
import classes from './card.module.css';

function Card() {
  return (
    <div className={classes.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={classes.texts}>
        <span className={classes.title}>Total Users</span>
        <span className={classes.number}>10.273</span>
        <span className={classes.detail}>
          <span className={classes.positive}>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
}
export default Card;
