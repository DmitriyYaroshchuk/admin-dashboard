import Image from 'next/image';
import Link from 'next/link';
import Search from '@/app/components/dashboard/search/search';
import Pagination from '@/app/components/dashboard/pagination/pagination';
import { parsePage } from '@/app/lib/pagination';
import { fetchProducts } from '@/app/lib/data';
import classes from '@/app/components/dashboard/products/products.module.css';
import { deleteProduct } from '@/app/lib/actions';

async function ProductsPage({ searchParams }) {
  const q = searchParams?.q || '';
  const page = parsePage(searchParams?.page);
  const { count, products } = await fetchProducts(q, page);
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={classes.product}>
                  <Image
                    src={product.img || '/noproduct.jpg'}
                    alt=""
                    width={40}
                    height={40}
                    className={classes.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={classes.buttons}>
                  <Link
                    href={`/dashboard/products/${product.id}`}
                    className={`${classes.button} ${classes.view}`}
                  >
                    View
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button
                      type="submit"
                      className={`${classes.button} ${classes.delete}`}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}
export default ProductsPage;
