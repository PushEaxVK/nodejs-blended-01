import path from 'node:path';
import fs from 'node:fs/promises';
import { PATH_FILES_DIR, PATH_DB } from '../constants/products.js';

const createProductsFiles = async () => {
  let products;
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    products = JSON.parse(data);
  } catch (error) {
    console.log('Error reading products db: ', error);
    return;
  }

  for (const product of products) {
    const name = product.name.toLocaleLowerCase().replaceAll(' ', '-');
    const fileName = `${name}.json`;
    const filePath = path.join(PATH_FILES_DIR, fileName);
    try {
      const jsonData = JSON.stringify(product);
      await fs.writeFile(filePath, jsonData);
    } catch (error) {
      console.log(`Error writeFile ${fileName}: ${error}`);
    }
  }
};

createProductsFiles();
