import Navbar from '../components/dashboard/navbar/navbar';
import Sidebar from '../components/dashboard/sidebar/sidebar';
import classes from '../components/dashboard/dashboard.module.css';

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <Sidebar />
      </div>
      <div className={classes.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
export default Layout;
