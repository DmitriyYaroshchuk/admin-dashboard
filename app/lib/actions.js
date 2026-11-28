'use server';
import { revalidatePath } from 'next/cache';
import { Product, User } from './models';
import { connectToDB } from './utils';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    await connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create user!');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const updatedFields = {
      username,
      email,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === '' || updatedFields[key] === undefined) &&
        delete updatedFields[key],
    );

    if (password) {
      updatedFields.password = await bcrypt.hash(password, 10);
    }

    await User.findByIdAndUpdate(id, updatedFields, { runValidators: true });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update user!');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size, cat } =
    Object.fromEntries(formData);
  try {
    await connectToDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create product!');
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete user');
  }

  revalidatePath('/dashboard/users');
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    await connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete product');
  }

  revalidatePath('/dashboard/products');
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size, cat } =
    Object.fromEntries(formData);

  try {
    await connectToDB();
    const updatedFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === '' || updatedFields[key] === undefined) &&
        delete updatedFields[key],
    );

    await Product.findByIdAndUpdate(id, updatedFields, { runValidators: true });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update product!');
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};
