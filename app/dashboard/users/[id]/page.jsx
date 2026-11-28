import Image from 'next/image';
import classes from '@/app/components/dashboard/singleUser/singleUser.module.css';
import { fetchUser } from '@/app/lib/data';
import { updateUser } from '@/app/lib/actions';
import { notFound } from 'next/navigation';

async function SingleUserPage({ params }) {
  const { id } = params;
  const user = await fetchUser(id);
  if (!user) notFound();
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image src={user.img || '/noavatar.png'} alt="" fill sizes="300px" />
        </div>
        {user.username}
      </div>
      <div className={classes.formContainer}>
        <form action={updateUser} className={classes.form}>
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={user.username}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={user.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
          />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder={user.phone} />
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" placeholder={user.address} />
          <label htmlFor="isAdmin">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            defaultValue={String(user.isAdmin)}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            defaultValue={String(user.isActive)}
          >
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
