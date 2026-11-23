import classes from './footer.module.css';

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>Admin Dashboard</div>
      <div className={classes.text}>© All rights reserved.</div>
    </div>
  );
}
export default Footer;
