import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const modifyProducts = async () => {
  let products;
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    products = JSON.parse(data);
  } catch (error) {
    console.log('Error reading products db: ', error);
    return;
  }
  products = products.map((val) => ({
    name: val.name,
    price: val.price,
    category: val.category,
  }));

  try {
    const writeData = JSON.stringify(products);
    await fs.writeFile(PATH_DB, writeData);
  } catch (error) {
    console.log('Error writing db file: ', error);
  }
};

modifyProducts();
