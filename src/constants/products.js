import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const PATH_DB = path.join(dirname, '..', 'db', 'db.json');
export const PATH_FILES_DIR = path.join(dirname, '..', 'db', 'files');
