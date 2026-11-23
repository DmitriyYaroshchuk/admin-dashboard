import Navbar from '../components/dashboard/navbar/navbar';
import Sidebar from '../components/dashboard/sidebar/sidebar';
import Footer from '../components/dashboard/footer/footer';
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
        <Footer />
      </div>
    </div>
  );
}
export default Layout;
