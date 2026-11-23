import Image from 'next/image';
import Link from 'next/link';
import Search from '@/app/components/dashboard/search/search';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import classes from '@/app/components/dashboard/products/products.module.css';

function ProductsPage() {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add" className={classes.addButton}>
          Add New
        </Link>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={classes.product}>
                <Image
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={classes.productImage}
                />
                iPhone
              </div>
            </td>
            <td>Desc</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>
            <td>
              <div className={classes.buttons}>
                <Link
                  href="/dashboard/products/test"
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
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
export default ProductsPage;
