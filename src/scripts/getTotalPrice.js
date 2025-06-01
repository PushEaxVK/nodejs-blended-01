import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getTotalPrice = async (price = 0) => {
  let products;

  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    products = JSON.parse(data);
  } catch (error) {
    console.log('Error reading products db!');
    return;
  }

  return products.reduce((acc, val) => acc + Number(val.price), 0);
};

console.log(await getTotalPrice());
