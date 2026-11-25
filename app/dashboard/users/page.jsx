import Image from 'next/image';
import Link from 'next/link';
import Search from '@/app/components/dashboard/search/search';
import classes from '@/app/components/dashboard/users/users.module.css';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import { fetchUsers } from '@/app/lib/data';

async function UsersPage() {
  const users = await fetchUsers();
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add" className={classes.addButton}>
          Add New
        </Link>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={classes.user}>
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt=""
                    width={40}
                    height={40}
                    className={classes.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td>{user.isActive ? 'active' : 'passive'}</td>
              <td>
                <div className={classes.buttons}>
                  <Link
                    href={`/dashboard/users/${user.id}`}
                    className={`${classes.button} ${classes.view}`}
                  >
                    View
                  </Link>
                  <button
                    type="button"
                    className={`${classes.button} ${classes.delete}`}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
export default UsersPage;
