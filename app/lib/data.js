import { Product, User } from './models';
import { connectToDB } from './utils';
import { ITEM_PER_PAGE } from './pagination';

const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const fetchUsers = async (q = '', page = 1) => {
  const filter = { username: { $regex: new RegExp(escapeRegex(q), 'i') } };

  try {
    await connectToDB();
    const count = await User.countDocuments(filter);
    const users = await User.find(filter)
      .sort({ _id: -1 })
      .skip(ITEM_PER_PAGE * (page - 1))
      .limit(ITEM_PER_PAGE);
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch users');
  }
};

export const fetchProducts = async (q = '', page = 1) => {
  const filter = { title: { $regex: new RegExp(escapeRegex(q), 'i') } };

  try {
    await connectToDB();
    const count = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .sort({ _id: -1 })
      .skip(ITEM_PER_PAGE * (page - 1))
      .limit(ITEM_PER_PAGE);
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch products');
  }
};
