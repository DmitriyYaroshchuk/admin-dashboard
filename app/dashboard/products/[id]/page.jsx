import Image from 'next/image';
import { notFound } from 'next/navigation';
import classes from '@/app/components/dashboard/singleProduct/singleProduct.module.css';
import { fetchProduct } from '@/app/lib/data';
import { updateProduct } from '@/app/lib/actions';

async function SingleProductPage({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);
  if (!product) notFound();

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image
            src={product.img || '/noproduct.jpg'}
            alt=""
            fill
            sizes="300px"
          />
        </div>
        {product.title}
      </div>
      <div className={classes.formContainer}>
        <form action={updateProduct} className={classes.form}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder={product.title}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            step="0.01"
            placeholder={product.price}
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            min="0"
            step="1"
            placeholder={product.stock}
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            name="color"
            placeholder={product.color || 'color'}
          />
          <label htmlFor="size">Size</label>
          <input
            type="text"
            id="size"
            name="size"
            placeholder={product.size || 'size'}
          />
          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat" defaultValue={product.cat || 'general'}>
            <option value="general">General</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
export default SingleProductPage;
