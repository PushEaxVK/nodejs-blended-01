import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getUniqueCategories = async () => {
  let products;
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    products = JSON.parse(data);
  } catch (error) {
    console.log('Error reading products db: ', error);
    return;
  }

  const catogories = products.map((val) => val.category);
  const uniqueCategories = [...new Set(catogories)];
  return uniqueCategories;
};

console.log(await getUniqueCategories());
