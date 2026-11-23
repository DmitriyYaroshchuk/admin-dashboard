import Card from '../components/dashboard/card/card';
import Chart from '../components/dashboard/chart/chart';
import classes from '../components/dashboard/dashboard.module.css';
import Rightbar from '../components/dashboard/rightbar/rightbar';
import Transactions from '../components/dashboard/transactions/transactions';

function Dashboard() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div className={classes.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={classes.side}>
        <Rightbar />
      </div>
    </div>
  );
}
export default Dashboard;
