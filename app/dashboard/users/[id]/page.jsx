import Image from 'next/image';
import classes from '@/app/components/dashboard/singleUser/singleUser.module.css';

function SingleUserPage() {
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image src="/noavatar.png" alt="" fill sizes="300px" />
        </div>
        John Doe
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="John Doe"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="JohnDoe@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
          />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="+1234567" />
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" placeholder="New York" />
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin" defaultValue="false">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive" defaultValue="true">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
export default SingleUserPage;
