import Image from 'next/image';
import classes from '@/app/components/dashboard/singleProduct/singleProduct.module.css';

function SingleProductPage() {
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill sizes="300px" />
        </div>
        iPhone
      </div>
      <div className={classes.formContainer}>
        <form className={classes.form}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="iPhone" />
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" placeholder="999" />
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" placeholder="72" />
          <label htmlFor="color">Color</label>
          <input type="text" id="color" name="color" placeholder="color" />
          <label htmlFor="size">Size</label>
          <input type="text" id="size" name="size" placeholder="size" />
          <label htmlFor="cat">Category</label>
          <select name="cat" id="cat" defaultValue="kitchen">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            rows="10"
            placeholder="Description"
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
export default SingleProductPage;
