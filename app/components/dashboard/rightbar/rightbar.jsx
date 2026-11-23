import Image from 'next/image';
import classes from './rightbar.module.css';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

function Rightbar() {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.bgContainer}>
          <Image
            className={classes.bg}
            src="/astronaut.png"
            alt=""
            fill
            sizes="150px"
          />
        </div>
        <div className={classes.text}>
          <span className={classes.notification}>🔥 Available Now</span>
          <h3 className={classes.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={classes.subtitle}>Takes 4 minutes to learn</span>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={classes.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.text}>
          <span className={classes.notification}>🚀 Coming Soon</span>
          <h3 className={classes.title}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className={classes.subtitle}>Boost your productivity</span>
          <p className={classes.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={classes.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
export default Rightbar;
