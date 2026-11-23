import classes from '@/app/components/dashboard/addUser/addUser.module.css';

function AddUserPage() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete="new-password"
          required
        />
        <input type="tel" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin" defaultValue="">
          <option value="" disabled>
            Is Admin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" id="isActive" defaultValue="">
          <option value="" disabled>
            Is Active?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddUserPage;
