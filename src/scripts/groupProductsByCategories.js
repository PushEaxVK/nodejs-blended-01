import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const groupProductsByCategories = async () => {
  let products;
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    products = JSON.parse(data);
  } catch (error) {
    console.log('Error reading products db: ', error);
    return;
  }

  const productsByCategory = products.reduce((acc, { name, category }) => {
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(name);
    return acc;
  }, {});

  return productsByCategory;
};

console.log(await groupProductsByCategories());
