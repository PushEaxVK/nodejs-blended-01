import { createFakeProduct } from '../utils/createFakeProduct.js';
import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const generateProducts = async (countOfProducts = 1) => {
  let products;

  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    products = JSON.parse(data);
  } catch (error) {
    console.log('Error reading products db!');
    return;
  }

  const newProducts = Array.from({ length: countOfProducts }, () =>
    createFakeProduct(),
  );
  products = [...products, ...newProducts];

  try {
    const jsonData = JSON.stringify(products);
    await fs.writeFile(PATH_DB, jsonData);
  } catch (error) {
    console.log('Error writeFile: ', error);
  }
};

generateProducts(5);
